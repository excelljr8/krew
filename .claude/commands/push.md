# Push to GitHub

Commit all current changes and push to GitHub.

If the user provided a message use it as the commit message. Otherwise use a short descriptive summary of what changed.

Steps:
1. Run `git status` to see what changed
2. Run `git diff` to understand the changes
3. Stage all changes: `git add -A`
4. Commit with a meaningful message ending with `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>`
5. Push: `git push origin main`
6. Confirm the push with the commit hash and a link to the repo
