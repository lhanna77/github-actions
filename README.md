# github-actions

- Custom variables: These store nonsensitive info and can be defined at the step, job, or workflow level. Their scope depends on where you define them.
- Configuration variables: Shared across multiple workflows, set at the repository, organization, or environment level.
- Default environment variables: Read-only variables available in every step, providing info like the event that triggered the workflow or the runner details. They start with GITHUB or RUNNER.
- Secret variables: Used for sensitive info, automatically masked in logs, and accessed securely through the secrets context.
