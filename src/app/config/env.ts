import { envSchema } from './env.validation';
import { logger } from './logger';

/******************************************************************************
                                 Re-exports
******************************************************************************/

export { NodeEnvs } from './env.validation';

/******************************************************************************
                                 Validation
******************************************************************************/

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  parsed.error.issues.forEach((issue) => {
    const variable = issue.path.join('.') || '(root)';

    logger.error(
      { variable, code: issue.code },
      `Invalid environment variable "${variable}": ${issue.message}`,
    );
  });

  throw new Error(
    'Environment validation failed. Fix the variables above before starting the server.',
  );
}

/******************************************************************************
                            Export 
******************************************************************************/

export const EnvVars = parsed.data;


