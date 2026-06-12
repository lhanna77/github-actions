# github-actions

- Custom variables: These store nonsensitive info and can be defined at the step, job, or workflow level. Their scope depends on where you define them.
- Configuration variables: Shared across multiple workflows, set at the repository, organization, or environment level.
- Default environment variables: Read-only variables available in every step, providing info like the event that triggered the workflow or the runner details. They start with GITHUB or RUNNER.
- Secret variables: Used for sensitive info, automatically masked in logs, and accessed securely through the secrets context.

## push-main.yml Workflow Configurations

### Workflow-Level Environment Variables
- `TEST_VAR`: Custom variable set to "Lee Hannah" - demonstrates storing nonsensitive info at workflow level
- `GITHUB_CONTEXT_JSON`: Uses `toJson(github)` function to convert the entire GitHub context object to JSON format for inspection

### Trigger Events
- **Push events**: Workflow triggers on pushes to the "main" branch
- **Manual dispatch**: `workflow_dispatch` allows manual triggering from the Actions tab

### Jobs and Configurations

#### Job 1: test_expressions
- **Runs on**: ubuntu-latest
- **Job-level environment variables**:
  - `aBool`: Boolean value (false) using expression syntax `${{ false }}`
  - `aNull`: Null value using `${{ null }}`
  - `aNumber`: Numeric value (21) using `${{ 21 }}`
  - `aString`: String value "this string"

- **Step conditions tested**:
  - Null checks: `if: (env.aNull == null)`
  - Boolean conversion: `if: ${{ fromJson(env.aBool) }}`
  - String contains function: `if: ${{ contains(env.aString, 'this') }}`
  - Status checks: `failure()`, `always()`, `cancelled()`
  - String formatting: Uses `format()` function to dynamically build strings

#### Job 2: test_vars
- **Conditional execution**: Only runs on `workflow_dispatch` events using `if: (github.event_name == 'workflow_dispatch')`
- **Runs on**: ubuntu-latest
- **Demonstrates accessing**:
  - GitHub context variables: `github.actor`, `GITHUB_JOB`
  - Configuration variables: `vars.CONF_VAR` (repository-level configuration)
  - Secret variables: `secrets.A_SECRET` (securely accessed secrets)
  - GitHub context JSON: Complete context object output for debugging
