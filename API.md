# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountCreatedByControlTowerSuccessfullyRule <a name="AccountCreatedByControlTowerSuccessfullyRule" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule"></a>

A rule for matching events from CloudTrail where Control Tower created a new account.

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.Initializer"></a>

```typescript
import { AccountCreatedByControlTowerSuccessfullyRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

new AccountCreatedByControlTowerSuccessfullyRule(scope: Construct, id: string, props: AccountRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountRuleProps">AccountRuleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountRuleProps">AccountRuleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.addEventPattern">addEventPattern</a></code> | Adds an event pattern filter to this rule. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.addTarget">addTarget</a></code> | Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventPattern` <a name="addEventPattern" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.addEventPattern"></a>

```typescript
public addEventPattern(eventPattern?: EventPattern): void
```

Adds an event pattern filter to this rule.

If a pattern was already specified,
these values are merged into the existing pattern.

For example, if the rule already contains the pattern:

    {
      "resources": [ "r1" ],
      "detail": {
        "hello": [ 1 ]
      }
    }

And `addEventPattern` is called with the pattern:

    {
      "resources": [ "r2" ],
      "detail": {
        "foo": [ "bar" ]
      }
    }

The resulting event pattern will be:

    {
      "resources": [ "r1", "r2" ],
      "detail": {
        "hello": [ 1 ],
        "foo": [ "bar" ]
      }
    }

###### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.addEventPattern.parameter.eventPattern"></a>

- *Type:* aws-cdk-lib.aws_events.EventPattern

---

##### `addTarget` <a name="addTarget" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.addTarget"></a>

```typescript
public addTarget(target?: IRuleTarget): void
```

Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets.

No-op if target is undefined.

###### `target`<sup>Optional</sup> <a name="target" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.addTarget.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_events.IRuleTarget

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.fromEventRuleArn">fromEventRuleArn</a></code> | Import an existing EventBridge Rule provided an ARN. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.isConstruct"></a>

```typescript
import { AccountCreatedByControlTowerSuccessfullyRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

AccountCreatedByControlTowerSuccessfullyRule.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isResource` <a name="isResource" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.isResource"></a>

```typescript
import { AccountCreatedByControlTowerSuccessfullyRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

AccountCreatedByControlTowerSuccessfullyRule.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromEventRuleArn` <a name="fromEventRuleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.fromEventRuleArn"></a>

```typescript
import { AccountCreatedByControlTowerSuccessfullyRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

AccountCreatedByControlTowerSuccessfullyRule.fromEventRuleArn(scope: Construct, id: string, eventRuleArn: string)
```

Import an existing EventBridge Rule provided an ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.fromEventRuleArn.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.fromEventRuleArn.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `eventRuleArn`<sup>Required</sup> <a name="eventRuleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.fromEventRuleArn.parameter.eventRuleArn"></a>

- *Type:* string

Event Rule ARN (i.e. arn:aws:events:<region>:<account-id>:rule/MyScheduledRule).

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.property.ruleName">ruleName</a></code> | <code>string</code> | The name event rule. |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example.

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByControlTowerSuccessfullyRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The name event rule.

---


### AccountCreatedByOrganizationsSuccessfullyRule <a name="AccountCreatedByOrganizationsSuccessfullyRule" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule"></a>

A rule for matching events from CloudTrail where Organizations created a new account.

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.Initializer"></a>

```typescript
import { AccountCreatedByOrganizationsSuccessfullyRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

new AccountCreatedByOrganizationsSuccessfullyRule(scope: Construct, id: string, props: BaseRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.BaseRuleProps">BaseRuleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.BaseRuleProps">BaseRuleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.addEventPattern">addEventPattern</a></code> | Adds an event pattern filter to this rule. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.addTarget">addTarget</a></code> | Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventPattern` <a name="addEventPattern" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.addEventPattern"></a>

```typescript
public addEventPattern(eventPattern?: EventPattern): void
```

Adds an event pattern filter to this rule.

If a pattern was already specified,
these values are merged into the existing pattern.

For example, if the rule already contains the pattern:

    {
      "resources": [ "r1" ],
      "detail": {
        "hello": [ 1 ]
      }
    }

And `addEventPattern` is called with the pattern:

    {
      "resources": [ "r2" ],
      "detail": {
        "foo": [ "bar" ]
      }
    }

The resulting event pattern will be:

    {
      "resources": [ "r1", "r2" ],
      "detail": {
        "hello": [ 1 ],
        "foo": [ "bar" ]
      }
    }

###### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.addEventPattern.parameter.eventPattern"></a>

- *Type:* aws-cdk-lib.aws_events.EventPattern

---

##### `addTarget` <a name="addTarget" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.addTarget"></a>

```typescript
public addTarget(target?: IRuleTarget): void
```

Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets.

No-op if target is undefined.

###### `target`<sup>Optional</sup> <a name="target" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.addTarget.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_events.IRuleTarget

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.fromEventRuleArn">fromEventRuleArn</a></code> | Import an existing EventBridge Rule provided an ARN. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.isConstruct"></a>

```typescript
import { AccountCreatedByOrganizationsSuccessfullyRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

AccountCreatedByOrganizationsSuccessfullyRule.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isResource` <a name="isResource" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.isResource"></a>

```typescript
import { AccountCreatedByOrganizationsSuccessfullyRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

AccountCreatedByOrganizationsSuccessfullyRule.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromEventRuleArn` <a name="fromEventRuleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.fromEventRuleArn"></a>

```typescript
import { AccountCreatedByOrganizationsSuccessfullyRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

AccountCreatedByOrganizationsSuccessfullyRule.fromEventRuleArn(scope: Construct, id: string, eventRuleArn: string)
```

Import an existing EventBridge Rule provided an ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.fromEventRuleArn.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.fromEventRuleArn.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `eventRuleArn`<sup>Required</sup> <a name="eventRuleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.fromEventRuleArn.parameter.eventRuleArn"></a>

- *Type:* string

Event Rule ARN (i.e. arn:aws:events:<region>:<account-id>:rule/MyScheduledRule).

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.property.ruleName">ruleName</a></code> | <code>string</code> | The name event rule. |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example.

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountCreatedByOrganizationsSuccessfullyRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The name event rule.

---


### AccountUpdatedByControlTowerSuccessfullyRule <a name="AccountUpdatedByControlTowerSuccessfullyRule" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule"></a>

A rule for matching events from CloudTrail where Control Tower updated a managed account.

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.Initializer"></a>

```typescript
import { AccountUpdatedByControlTowerSuccessfullyRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

new AccountUpdatedByControlTowerSuccessfullyRule(scope: Construct, id: string, props: AccountRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountRuleProps">AccountRuleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountRuleProps">AccountRuleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.addEventPattern">addEventPattern</a></code> | Adds an event pattern filter to this rule. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.addTarget">addTarget</a></code> | Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventPattern` <a name="addEventPattern" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.addEventPattern"></a>

```typescript
public addEventPattern(eventPattern?: EventPattern): void
```

Adds an event pattern filter to this rule.

If a pattern was already specified,
these values are merged into the existing pattern.

For example, if the rule already contains the pattern:

    {
      "resources": [ "r1" ],
      "detail": {
        "hello": [ 1 ]
      }
    }

And `addEventPattern` is called with the pattern:

    {
      "resources": [ "r2" ],
      "detail": {
        "foo": [ "bar" ]
      }
    }

The resulting event pattern will be:

    {
      "resources": [ "r1", "r2" ],
      "detail": {
        "hello": [ 1 ],
        "foo": [ "bar" ]
      }
    }

###### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.addEventPattern.parameter.eventPattern"></a>

- *Type:* aws-cdk-lib.aws_events.EventPattern

---

##### `addTarget` <a name="addTarget" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.addTarget"></a>

```typescript
public addTarget(target?: IRuleTarget): void
```

Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets.

No-op if target is undefined.

###### `target`<sup>Optional</sup> <a name="target" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.addTarget.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_events.IRuleTarget

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.fromEventRuleArn">fromEventRuleArn</a></code> | Import an existing EventBridge Rule provided an ARN. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.isConstruct"></a>

```typescript
import { AccountUpdatedByControlTowerSuccessfullyRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

AccountUpdatedByControlTowerSuccessfullyRule.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isResource` <a name="isResource" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.isResource"></a>

```typescript
import { AccountUpdatedByControlTowerSuccessfullyRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

AccountUpdatedByControlTowerSuccessfullyRule.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromEventRuleArn` <a name="fromEventRuleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.fromEventRuleArn"></a>

```typescript
import { AccountUpdatedByControlTowerSuccessfullyRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

AccountUpdatedByControlTowerSuccessfullyRule.fromEventRuleArn(scope: Construct, id: string, eventRuleArn: string)
```

Import an existing EventBridge Rule provided an ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.fromEventRuleArn.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.fromEventRuleArn.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `eventRuleArn`<sup>Required</sup> <a name="eventRuleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.fromEventRuleArn.parameter.eventRuleArn"></a>

- *Type:* string

Event Rule ARN (i.e. arn:aws:events:<region>:<account-id>:rule/MyScheduledRule).

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.property.ruleName">ruleName</a></code> | <code>string</code> | The name event rule. |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example.

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountUpdatedByControlTowerSuccessfullyRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The name event rule.

---


## Structs <a name="Structs" id="Structs"></a>

### AccountRuleProps <a name="AccountRuleProps" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountRuleProps"></a>

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountRuleProps.Initializer"></a>

```typescript
import { AccountRuleProps } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

const accountRuleProps: AccountRuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountRuleProps.property.description">description</a></code> | <code>string</code> | A description of the rule's purpose. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountRuleProps.property.enabled">enabled</a></code> | <code>boolean</code> | Indicates whether the rule is enabled. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountRuleProps.property.eventBus">eventBus</a></code> | <code>aws-cdk-lib.aws_events.IEventBus</code> | The event bus to associate with this rule. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountRuleProps.property.ruleName">ruleName</a></code> | <code>string</code> | A name for the rule. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountRuleProps.property.targets">targets</a></code> | <code>aws-cdk-lib.aws_events.IRuleTarget[]</code> | Targets to invoke when this rule matches an event. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountRuleProps.property.accountId">accountId</a></code> | <code>string</code> | The account ID to match. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountRuleProps.property.accountName">accountName</a></code> | <code>string</code> | The account name to match. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountRuleProps.property.ouId">ouId</a></code> | <code>string</code> | The OU ID to match. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountRuleProps.property.ouName">ouName</a></code> | <code>string</code> | The OU name to match. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountRuleProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* A rule for new account creation in Organizations

A description of the rule's purpose.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountRuleProps.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether the rule is enabled.

---

##### `eventBus`<sup>Optional</sup> <a name="eventBus" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountRuleProps.property.eventBus"></a>

```typescript
public readonly eventBus: IEventBus;
```

- *Type:* aws-cdk-lib.aws_events.IEventBus
- *Default:* The default event bus.

The event bus to associate with this rule.

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountRuleProps.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID and uses that ID for the rule name. For more information, see Name Type.

A name for the rule.

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountRuleProps.property.targets"></a>

```typescript
public readonly targets: IRuleTarget[];
```

- *Type:* aws-cdk-lib.aws_events.IRuleTarget[]
- *Default:* No targets.

Targets to invoke when this rule matches an event.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountRuleProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account ID to match.

---

##### `accountName`<sup>Optional</sup> <a name="accountName" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountRuleProps.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

The account name to match.

---

##### `ouId`<sup>Optional</sup> <a name="ouId" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountRuleProps.property.ouId"></a>

```typescript
public readonly ouId: string;
```

- *Type:* string

The OU ID to match.

---

##### `ouName`<sup>Optional</sup> <a name="ouName" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountRuleProps.property.ouName"></a>

```typescript
public readonly ouName: string;
```

- *Type:* string

The OU name to match.

---

### BaseRuleProps <a name="BaseRuleProps" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.BaseRuleProps"></a>

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.BaseRuleProps.Initializer"></a>

```typescript
import { BaseRuleProps } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

const baseRuleProps: BaseRuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.BaseRuleProps.property.description">description</a></code> | <code>string</code> | A description of the rule's purpose. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.BaseRuleProps.property.enabled">enabled</a></code> | <code>boolean</code> | Indicates whether the rule is enabled. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.BaseRuleProps.property.eventBus">eventBus</a></code> | <code>aws-cdk-lib.aws_events.IEventBus</code> | The event bus to associate with this rule. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.BaseRuleProps.property.ruleName">ruleName</a></code> | <code>string</code> | A name for the rule. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.BaseRuleProps.property.targets">targets</a></code> | <code>aws-cdk-lib.aws_events.IRuleTarget[]</code> | Targets to invoke when this rule matches an event. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.BaseRuleProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* A rule for new account creation in Organizations

A description of the rule's purpose.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.BaseRuleProps.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether the rule is enabled.

---

##### `eventBus`<sup>Optional</sup> <a name="eventBus" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.BaseRuleProps.property.eventBus"></a>

```typescript
public readonly eventBus: IEventBus;
```

- *Type:* aws-cdk-lib.aws_events.IEventBus
- *Default:* The default event bus.

The event bus to associate with this rule.

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.BaseRuleProps.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID and uses that ID for the rule name. For more information, see Name Type.

A name for the rule.

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.BaseRuleProps.property.targets"></a>

```typescript
public readonly targets: IRuleTarget[];
```

- *Type:* aws-cdk-lib.aws_events.IRuleTarget[]
- *Default:* No targets.

Targets to invoke when this rule matches an event.

---



