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

export const envSchema = z
  .object({
    NODE_ENV: z.enum([NodeEnvs.DEV, NodeEnvs.TEST, NodeEnvs.PRODUCTION]),
    PORT: z.coerce.number(),
    HOST: z.string(),
    ENABLE_HTTP_SERVER: z.stringbool(),
  })
  .transform((env) => ({
    NodeEnv: env.NODE_ENV,
    Port: env.PORT,
    Host: env.HOST,
    EnableHttpServer: env.ENABLE_HTTP_SERVER,
  }));

/******************************************************************************
                                  Types
******************************************************************************/

export type EnvVars = z.infer<typeof envSchema>;
