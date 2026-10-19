# cdk-library-control-tower-lifecycle-events

NOTE: This project is in active development.

EventBridge rules for AWS Control Tower lifecycle events and Organizations
account creation. See the [API](API.md) for the available constructs.

Rules match successful events by default. Set `eventState` to
`EventStates.FAILED` to match failures instead. You can filter by account,
OU, or guardrail. If you set both `ouId` and `ouName`, both must match.

## Development

Requires Node.js and pnpm 12. From the repository directory:

```bash
pnpm install --frozen-lockfile
pnpm build
```

## References

- [Extending constructs](https://github.com/aws/aws-cdk/issues/3235)
- [Control Tower lifecycle events][lifecycle-events]

[lifecycle-events]: https://docs.aws.amazon.com/controltower/latest/userguide/lifecycle-events.html
