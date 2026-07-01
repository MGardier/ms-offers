/******************************************************************************
                                 Paths
******************************************************************************/

/**
 * Centralized route paths. "Base" is the mount point of the whole API; each
 * module declares its sub-paths relative to its own router.
 */
const Paths = {
  Base: '/api',
  Health: {
    Base: '/health',
  },
  Offers: {
    Base: '/offers',
    ById: '/:id',
  },
} as const;

export default Paths;
