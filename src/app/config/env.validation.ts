import { z } from 'zod';

/******************************************************************************
                                 Constants
******************************************************************************/

// NOTE: These need to match the names of your ".env" files
export const NodeEnvs = {
  DEV: 'development',
  TEST: 'test',
  PRODUCTION: 'production',
} as const;

/******************************************************************************
                                  Schema
******************************************************************************/

// Variables consumed by the docker-compose "dev" stack (Postgres + pgAdmin).
// They are required in dev to test in standalone but not used in prod so optionnal

const DOCKER_COMPOSE_VARS = [
  'POSTGRES_USER',
  'POSTGRES_PASSWORD',
  'POSTGRES_DB',
  'PGADMIN_EMAIL',
  'PGADMIN_PASSWORD',
] as const;

export const envSchema = z
  .object({

  /* #################### ENVIRONNEMENT ########################### */

    NODE_ENV: z.enum([NodeEnvs.DEV, NodeEnvs.TEST, NodeEnvs.PRODUCTION]),
   

  /* #################### SERVER ########################### */

    PORT: z.coerce.number(),
    HOST: z.string(),
    ENABLE_HTTP_SERVER: z.stringbool(),

  /* #################### DATABASE ########################### */

    DATABASE_URL: z.url(),

  /* #################### DEV POSTGRES (see DOCKER_COMPOSE_VARS above) ########################### */

    // POSTGRES
    POSTGRES_USER: z.string().optional(),
    POSTGRES_PASSWORD: z.string().optional(),
    POSTGRES_DB: z.string().optional(),

    // PGADMIN
    PGADMIN_EMAIL: z.string().optional(),
    PGADMIN_PASSWORD: z.string().optional(),

  })

  .superRefine((env, ctx) => {
    if (env.NODE_ENV !== NodeEnvs.DEV) 
      return;
    

    DOCKER_COMPOSE_VARS.forEach((key) => {
      if (!env[key]) {
        ctx.addIssue({
          code: 'custom',
          path: [key],
          message: `${key} is required when NODE_ENV is "${NodeEnvs.DEV}".`,
        });
      }
    });
  })

  .transform((env) => ({
    NodeEnv: env.NODE_ENV,
    Port: env.PORT,
    Host: env.HOST,
    EnableHttpServer: env.ENABLE_HTTP_SERVER,
    DatabaseUrl: env.DATABASE_URL,
  }));

/******************************************************************************
                                  Types
******************************************************************************/

export type EnvVars = z.infer<typeof envSchema>;
