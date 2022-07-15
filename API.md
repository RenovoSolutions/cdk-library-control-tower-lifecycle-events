# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CreatedAccountByOrganizationsRule <a name="CreatedAccountByOrganizationsRule" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule"></a>

A rule for matching events from CloudTrail where Organizations created a new account.

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.Initializer"></a>

```typescript
import { CreatedAccountByOrganizationsRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

new CreatedAccountByOrganizationsRule(scope: Construct, id: string, props: BaseRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.BaseRuleProps">BaseRuleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.BaseRuleProps">BaseRuleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.addEventPattern">addEventPattern</a></code> | Adds an event pattern filter to this rule. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.addTarget">addTarget</a></code> | Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventPattern` <a name="addEventPattern" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.addEventPattern"></a>

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

###### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.addEventPattern.parameter.eventPattern"></a>

- *Type:* aws-cdk-lib.aws_events.EventPattern

---

##### `addTarget` <a name="addTarget" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.addTarget"></a>

```typescript
public addTarget(target?: IRuleTarget): void
```

Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets.

No-op if target is undefined.

###### `target`<sup>Optional</sup> <a name="target" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.addTarget.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_events.IRuleTarget

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.fromEventRuleArn">fromEventRuleArn</a></code> | Import an existing EventBridge Rule provided an ARN. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.isConstruct"></a>

```typescript
import { CreatedAccountByOrganizationsRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

CreatedAccountByOrganizationsRule.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.isOwnedResource"></a>

```typescript
import { CreatedAccountByOrganizationsRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

CreatedAccountByOrganizationsRule.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.isResource"></a>

```typescript
import { CreatedAccountByOrganizationsRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

CreatedAccountByOrganizationsRule.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromEventRuleArn` <a name="fromEventRuleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.fromEventRuleArn"></a>

```typescript
import { CreatedAccountByOrganizationsRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

CreatedAccountByOrganizationsRule.fromEventRuleArn(scope: Construct, id: string, eventRuleArn: string)
```

Import an existing EventBridge Rule provided an ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.fromEventRuleArn.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.fromEventRuleArn.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `eventRuleArn`<sup>Required</sup> <a name="eventRuleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.fromEventRuleArn.parameter.eventRuleArn"></a>

- *Type:* string

Event Rule ARN (i.e. arn:aws:events:<region>:<account-id>:rule/MyScheduledRule).

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.property.ruleName">ruleName</a></code> | <code>string</code> | The name event rule. |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example.

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountByOrganizationsRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The name event rule.

---


### CreatedAccountRule <a name="CreatedAccountRule" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule"></a>

A rule for matching events from CloudTrail where Control Tower created a new account.

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.Initializer"></a>

```typescript
import { CreatedAccountRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

new CreatedAccountRule(scope: Construct, id: string, props: OuRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.OuRuleProps">OuRuleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.OuRuleProps">OuRuleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.addEventPattern">addEventPattern</a></code> | Adds an event pattern filter to this rule. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.addTarget">addTarget</a></code> | Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventPattern` <a name="addEventPattern" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.addEventPattern"></a>

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

###### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.addEventPattern.parameter.eventPattern"></a>

- *Type:* aws-cdk-lib.aws_events.EventPattern

---

##### `addTarget` <a name="addTarget" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.addTarget"></a>

```typescript
public addTarget(target?: IRuleTarget): void
```

Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets.

No-op if target is undefined.

###### `target`<sup>Optional</sup> <a name="target" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.addTarget.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_events.IRuleTarget

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.fromEventRuleArn">fromEventRuleArn</a></code> | Import an existing EventBridge Rule provided an ARN. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.isConstruct"></a>

```typescript
import { CreatedAccountRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

CreatedAccountRule.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.isOwnedResource"></a>

```typescript
import { CreatedAccountRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

CreatedAccountRule.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.isResource"></a>

```typescript
import { CreatedAccountRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

CreatedAccountRule.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromEventRuleArn` <a name="fromEventRuleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.fromEventRuleArn"></a>

```typescript
import { CreatedAccountRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

CreatedAccountRule.fromEventRuleArn(scope: Construct, id: string, eventRuleArn: string)
```

Import an existing EventBridge Rule provided an ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.fromEventRuleArn.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.fromEventRuleArn.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `eventRuleArn`<sup>Required</sup> <a name="eventRuleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.fromEventRuleArn.parameter.eventRuleArn"></a>

- *Type:* string

Event Rule ARN (i.e. arn:aws:events:<region>:<account-id>:rule/MyScheduledRule).

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.property.ruleName">ruleName</a></code> | <code>string</code> | The name event rule. |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example.

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.CreatedAccountRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The name event rule.

---


### DeregisteredOrganizationalUnitRule <a name="DeregisteredOrganizationalUnitRule" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule"></a>

A rule for matching events from CloudTrail where Control Tower deregistered an Organizational Unit.

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.Initializer"></a>

```typescript
import { DeregisteredOrganizationalUnitRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

new DeregisteredOrganizationalUnitRule(scope: Construct, id: string, props: OuRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.OuRuleProps">OuRuleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.OuRuleProps">OuRuleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.addEventPattern">addEventPattern</a></code> | Adds an event pattern filter to this rule. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.addTarget">addTarget</a></code> | Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventPattern` <a name="addEventPattern" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.addEventPattern"></a>

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

###### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.addEventPattern.parameter.eventPattern"></a>

- *Type:* aws-cdk-lib.aws_events.EventPattern

---

##### `addTarget` <a name="addTarget" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.addTarget"></a>

```typescript
public addTarget(target?: IRuleTarget): void
```

Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets.

No-op if target is undefined.

###### `target`<sup>Optional</sup> <a name="target" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.addTarget.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_events.IRuleTarget

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.fromEventRuleArn">fromEventRuleArn</a></code> | Import an existing EventBridge Rule provided an ARN. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.isConstruct"></a>

```typescript
import { DeregisteredOrganizationalUnitRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

DeregisteredOrganizationalUnitRule.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.isOwnedResource"></a>

```typescript
import { DeregisteredOrganizationalUnitRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

DeregisteredOrganizationalUnitRule.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.isResource"></a>

```typescript
import { DeregisteredOrganizationalUnitRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

DeregisteredOrganizationalUnitRule.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromEventRuleArn` <a name="fromEventRuleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.fromEventRuleArn"></a>

```typescript
import { DeregisteredOrganizationalUnitRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

DeregisteredOrganizationalUnitRule.fromEventRuleArn(scope: Construct, id: string, eventRuleArn: string)
```

Import an existing EventBridge Rule provided an ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.fromEventRuleArn.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.fromEventRuleArn.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `eventRuleArn`<sup>Required</sup> <a name="eventRuleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.fromEventRuleArn.parameter.eventRuleArn"></a>

- *Type:* string

Event Rule ARN (i.e. arn:aws:events:<region>:<account-id>:rule/MyScheduledRule).

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.property.ruleName">ruleName</a></code> | <code>string</code> | The name event rule. |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example.

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DeregisteredOrganizationalUnitRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The name event rule.

---


### DisabledGuardrailRule <a name="DisabledGuardrailRule" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule"></a>

A rule for matching events from CloudTrail where a guard rail was disabled via Control Tower for an Organizational Unit.

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.Initializer"></a>

```typescript
import { DisabledGuardrailRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

new DisabledGuardrailRule(scope: Construct, id: string, props: GuardrailRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailRuleProps">GuardrailRuleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailRuleProps">GuardrailRuleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.addEventPattern">addEventPattern</a></code> | Adds an event pattern filter to this rule. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.addTarget">addTarget</a></code> | Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventPattern` <a name="addEventPattern" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.addEventPattern"></a>

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

###### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.addEventPattern.parameter.eventPattern"></a>

- *Type:* aws-cdk-lib.aws_events.EventPattern

---

##### `addTarget` <a name="addTarget" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.addTarget"></a>

```typescript
public addTarget(target?: IRuleTarget): void
```

Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets.

No-op if target is undefined.

###### `target`<sup>Optional</sup> <a name="target" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.addTarget.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_events.IRuleTarget

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.fromEventRuleArn">fromEventRuleArn</a></code> | Import an existing EventBridge Rule provided an ARN. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.isConstruct"></a>

```typescript
import { DisabledGuardrailRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

DisabledGuardrailRule.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.isOwnedResource"></a>

```typescript
import { DisabledGuardrailRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

DisabledGuardrailRule.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.isResource"></a>

```typescript
import { DisabledGuardrailRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

DisabledGuardrailRule.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromEventRuleArn` <a name="fromEventRuleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.fromEventRuleArn"></a>

```typescript
import { DisabledGuardrailRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

DisabledGuardrailRule.fromEventRuleArn(scope: Construct, id: string, eventRuleArn: string)
```

Import an existing EventBridge Rule provided an ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.fromEventRuleArn.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.fromEventRuleArn.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `eventRuleArn`<sup>Required</sup> <a name="eventRuleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.fromEventRuleArn.parameter.eventRuleArn"></a>

- *Type:* string

Event Rule ARN (i.e. arn:aws:events:<region>:<account-id>:rule/MyScheduledRule).

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.property.ruleName">ruleName</a></code> | <code>string</code> | The name event rule. |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example.

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.DisabledGuardrailRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The name event rule.

---


### EnabledGuardrailRule <a name="EnabledGuardrailRule" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule"></a>

A rule for matching events from CloudTrail where a guardrail was enabled via Control Tower for an Organizational Unit.

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.Initializer"></a>

```typescript
import { EnabledGuardrailRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

new EnabledGuardrailRule(scope: Construct, id: string, props: GuardrailRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailRuleProps">GuardrailRuleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailRuleProps">GuardrailRuleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.addEventPattern">addEventPattern</a></code> | Adds an event pattern filter to this rule. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.addTarget">addTarget</a></code> | Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventPattern` <a name="addEventPattern" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.addEventPattern"></a>

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

###### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.addEventPattern.parameter.eventPattern"></a>

- *Type:* aws-cdk-lib.aws_events.EventPattern

---

##### `addTarget` <a name="addTarget" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.addTarget"></a>

```typescript
public addTarget(target?: IRuleTarget): void
```

Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets.

No-op if target is undefined.

###### `target`<sup>Optional</sup> <a name="target" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.addTarget.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_events.IRuleTarget

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.fromEventRuleArn">fromEventRuleArn</a></code> | Import an existing EventBridge Rule provided an ARN. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.isConstruct"></a>

```typescript
import { EnabledGuardrailRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

EnabledGuardrailRule.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.isOwnedResource"></a>

```typescript
import { EnabledGuardrailRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

EnabledGuardrailRule.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.isResource"></a>

```typescript
import { EnabledGuardrailRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

EnabledGuardrailRule.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromEventRuleArn` <a name="fromEventRuleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.fromEventRuleArn"></a>

```typescript
import { EnabledGuardrailRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

EnabledGuardrailRule.fromEventRuleArn(scope: Construct, id: string, eventRuleArn: string)
```

Import an existing EventBridge Rule provided an ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.fromEventRuleArn.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.fromEventRuleArn.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `eventRuleArn`<sup>Required</sup> <a name="eventRuleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.fromEventRuleArn.parameter.eventRuleArn"></a>

- *Type:* string

Event Rule ARN (i.e. arn:aws:events:<region>:<account-id>:rule/MyScheduledRule).

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.property.ruleName">ruleName</a></code> | <code>string</code> | The name event rule. |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example.

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EnabledGuardrailRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The name event rule.

---


### RegisteredOrganizationalUnitRule <a name="RegisteredOrganizationalUnitRule" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule"></a>

A rule for matching events from CloudTrail where Control Tower registered a new Organizational Unit.

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.Initializer"></a>

```typescript
import { RegisteredOrganizationalUnitRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

new RegisteredOrganizationalUnitRule(scope: Construct, id: string, props: BaseRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.BaseRuleProps">BaseRuleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.BaseRuleProps">BaseRuleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.addEventPattern">addEventPattern</a></code> | Adds an event pattern filter to this rule. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.addTarget">addTarget</a></code> | Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventPattern` <a name="addEventPattern" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.addEventPattern"></a>

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

###### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.addEventPattern.parameter.eventPattern"></a>

- *Type:* aws-cdk-lib.aws_events.EventPattern

---

##### `addTarget` <a name="addTarget" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.addTarget"></a>

```typescript
public addTarget(target?: IRuleTarget): void
```

Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets.

No-op if target is undefined.

###### `target`<sup>Optional</sup> <a name="target" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.addTarget.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_events.IRuleTarget

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.fromEventRuleArn">fromEventRuleArn</a></code> | Import an existing EventBridge Rule provided an ARN. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.isConstruct"></a>

```typescript
import { RegisteredOrganizationalUnitRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

RegisteredOrganizationalUnitRule.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.isOwnedResource"></a>

```typescript
import { RegisteredOrganizationalUnitRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

RegisteredOrganizationalUnitRule.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.isResource"></a>

```typescript
import { RegisteredOrganizationalUnitRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

RegisteredOrganizationalUnitRule.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromEventRuleArn` <a name="fromEventRuleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.fromEventRuleArn"></a>

```typescript
import { RegisteredOrganizationalUnitRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

RegisteredOrganizationalUnitRule.fromEventRuleArn(scope: Construct, id: string, eventRuleArn: string)
```

Import an existing EventBridge Rule provided an ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.fromEventRuleArn.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.fromEventRuleArn.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `eventRuleArn`<sup>Required</sup> <a name="eventRuleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.fromEventRuleArn.parameter.eventRuleArn"></a>

- *Type:* string

Event Rule ARN (i.e. arn:aws:events:<region>:<account-id>:rule/MyScheduledRule).

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.property.ruleName">ruleName</a></code> | <code>string</code> | The name event rule. |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example.

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.RegisteredOrganizationalUnitRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The name event rule.

---


### SetupLandingZoneRule <a name="SetupLandingZoneRule" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule"></a>

A rule for matching events from CloudTrail where a landing zone was setup via Control Tower.

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.Initializer"></a>

```typescript
import { SetupLandingZoneRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

new SetupLandingZoneRule(scope: Construct, id: string, props: BaseRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.BaseRuleProps">BaseRuleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.BaseRuleProps">BaseRuleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.addEventPattern">addEventPattern</a></code> | Adds an event pattern filter to this rule. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.addTarget">addTarget</a></code> | Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventPattern` <a name="addEventPattern" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.addEventPattern"></a>

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

###### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.addEventPattern.parameter.eventPattern"></a>

- *Type:* aws-cdk-lib.aws_events.EventPattern

---

##### `addTarget` <a name="addTarget" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.addTarget"></a>

```typescript
public addTarget(target?: IRuleTarget): void
```

Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets.

No-op if target is undefined.

###### `target`<sup>Optional</sup> <a name="target" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.addTarget.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_events.IRuleTarget

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.fromEventRuleArn">fromEventRuleArn</a></code> | Import an existing EventBridge Rule provided an ARN. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.isConstruct"></a>

```typescript
import { SetupLandingZoneRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

SetupLandingZoneRule.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.isOwnedResource"></a>

```typescript
import { SetupLandingZoneRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

SetupLandingZoneRule.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.isResource"></a>

```typescript
import { SetupLandingZoneRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

SetupLandingZoneRule.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromEventRuleArn` <a name="fromEventRuleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.fromEventRuleArn"></a>

```typescript
import { SetupLandingZoneRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

SetupLandingZoneRule.fromEventRuleArn(scope: Construct, id: string, eventRuleArn: string)
```

Import an existing EventBridge Rule provided an ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.fromEventRuleArn.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.fromEventRuleArn.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `eventRuleArn`<sup>Required</sup> <a name="eventRuleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.fromEventRuleArn.parameter.eventRuleArn"></a>

- *Type:* string

Event Rule ARN (i.e. arn:aws:events:<region>:<account-id>:rule/MyScheduledRule).

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.property.ruleName">ruleName</a></code> | <code>string</code> | The name event rule. |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example.

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.SetupLandingZoneRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The name event rule.

---


### UpdatedLandingZoneRule <a name="UpdatedLandingZoneRule" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule"></a>

A rule for matching events from CloudTrail where a landing zone was updated via Control Tower.

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.Initializer"></a>

```typescript
import { UpdatedLandingZoneRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

new UpdatedLandingZoneRule(scope: Construct, id: string, props: BaseRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.BaseRuleProps">BaseRuleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.BaseRuleProps">BaseRuleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.addEventPattern">addEventPattern</a></code> | Adds an event pattern filter to this rule. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.addTarget">addTarget</a></code> | Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventPattern` <a name="addEventPattern" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.addEventPattern"></a>

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

###### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.addEventPattern.parameter.eventPattern"></a>

- *Type:* aws-cdk-lib.aws_events.EventPattern

---

##### `addTarget` <a name="addTarget" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.addTarget"></a>

```typescript
public addTarget(target?: IRuleTarget): void
```

Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets.

No-op if target is undefined.

###### `target`<sup>Optional</sup> <a name="target" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.addTarget.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_events.IRuleTarget

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.fromEventRuleArn">fromEventRuleArn</a></code> | Import an existing EventBridge Rule provided an ARN. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.isConstruct"></a>

```typescript
import { UpdatedLandingZoneRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

UpdatedLandingZoneRule.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.isOwnedResource"></a>

```typescript
import { UpdatedLandingZoneRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

UpdatedLandingZoneRule.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.isResource"></a>

```typescript
import { UpdatedLandingZoneRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

UpdatedLandingZoneRule.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromEventRuleArn` <a name="fromEventRuleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.fromEventRuleArn"></a>

```typescript
import { UpdatedLandingZoneRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

UpdatedLandingZoneRule.fromEventRuleArn(scope: Construct, id: string, eventRuleArn: string)
```

Import an existing EventBridge Rule provided an ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.fromEventRuleArn.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.fromEventRuleArn.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `eventRuleArn`<sup>Required</sup> <a name="eventRuleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.fromEventRuleArn.parameter.eventRuleArn"></a>

- *Type:* string

Event Rule ARN (i.e. arn:aws:events:<region>:<account-id>:rule/MyScheduledRule).

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.property.ruleName">ruleName</a></code> | <code>string</code> | The name event rule. |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example.

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedLandingZoneRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The name event rule.

---


### UpdatedManagedAccountRule <a name="UpdatedManagedAccountRule" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule"></a>

A rule for matching events from CloudTrail where Control Tower updated a managed account.

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.Initializer"></a>

```typescript
import { UpdatedManagedAccountRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

new UpdatedManagedAccountRule(scope: Construct, id: string, props: AccountRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountRuleProps">AccountRuleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountRuleProps">AccountRuleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.addEventPattern">addEventPattern</a></code> | Adds an event pattern filter to this rule. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.addTarget">addTarget</a></code> | Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventPattern` <a name="addEventPattern" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.addEventPattern"></a>

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

###### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.addEventPattern.parameter.eventPattern"></a>

- *Type:* aws-cdk-lib.aws_events.EventPattern

---

##### `addTarget` <a name="addTarget" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.addTarget"></a>

```typescript
public addTarget(target?: IRuleTarget): void
```

Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets.

No-op if target is undefined.

###### `target`<sup>Optional</sup> <a name="target" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.addTarget.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_events.IRuleTarget

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.fromEventRuleArn">fromEventRuleArn</a></code> | Import an existing EventBridge Rule provided an ARN. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.isConstruct"></a>

```typescript
import { UpdatedManagedAccountRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

UpdatedManagedAccountRule.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.isOwnedResource"></a>

```typescript
import { UpdatedManagedAccountRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

UpdatedManagedAccountRule.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.isResource"></a>

```typescript
import { UpdatedManagedAccountRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

UpdatedManagedAccountRule.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromEventRuleArn` <a name="fromEventRuleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.fromEventRuleArn"></a>

```typescript
import { UpdatedManagedAccountRule } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

UpdatedManagedAccountRule.fromEventRuleArn(scope: Construct, id: string, eventRuleArn: string)
```

Import an existing EventBridge Rule provided an ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.fromEventRuleArn.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.fromEventRuleArn.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `eventRuleArn`<sup>Required</sup> <a name="eventRuleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.fromEventRuleArn.parameter.eventRuleArn"></a>

- *Type:* string

Event Rule ARN (i.e. arn:aws:events:<region>:<account-id>:rule/MyScheduledRule).

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.property.ruleName">ruleName</a></code> | <code>string</code> | The name event rule. |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example.

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.UpdatedManagedAccountRule.property.ruleName"></a>

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
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountRuleProps.property.eventState">eventState</a></code> | <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.EventStates">EventStates</a></code> | Which event state should this rule trigger for. |
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

##### `eventState`<sup>Optional</sup> <a name="eventState" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.AccountRuleProps.property.eventState"></a>

```typescript
public readonly eventState: EventStates;
```

- *Type:* <a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.EventStates">EventStates</a>
- *Default:* EventStates.SUCCEEDED

Which event state should this rule trigger for.

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
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.BaseRuleProps.property.eventState">eventState</a></code> | <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.EventStates">EventStates</a></code> | Which event state should this rule trigger for. |
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

##### `eventState`<sup>Optional</sup> <a name="eventState" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.BaseRuleProps.property.eventState"></a>

```typescript
public readonly eventState: EventStates;
```

- *Type:* <a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.EventStates">EventStates</a>
- *Default:* EventStates.SUCCEEDED

Which event state should this rule trigger for.

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

### GuardrailRuleProps <a name="GuardrailRuleProps" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailRuleProps"></a>

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailRuleProps.Initializer"></a>

```typescript
import { GuardrailRuleProps } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

const guardrailRuleProps: GuardrailRuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailRuleProps.property.description">description</a></code> | <code>string</code> | A description of the rule's purpose. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailRuleProps.property.enabled">enabled</a></code> | <code>boolean</code> | Indicates whether the rule is enabled. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailRuleProps.property.eventBus">eventBus</a></code> | <code>aws-cdk-lib.aws_events.IEventBus</code> | The event bus to associate with this rule. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailRuleProps.property.eventState">eventState</a></code> | <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.EventStates">EventStates</a></code> | Which event state should this rule trigger for. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailRuleProps.property.ruleName">ruleName</a></code> | <code>string</code> | A name for the rule. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailRuleProps.property.targets">targets</a></code> | <code>aws-cdk-lib.aws_events.IRuleTarget[]</code> | Targets to invoke when this rule matches an event. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailRuleProps.property.guardrailBehavior">guardrailBehavior</a></code> | <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailBehaviors">GuardrailBehaviors</a></code> | The guardrail behavior to match. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailRuleProps.property.guardrailId">guardrailId</a></code> | <code>string</code> | The guardrail ID to match. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailRuleProps.property.ouId">ouId</a></code> | <code>string</code> | The OU ID to match. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailRuleProps.property.ouName">ouName</a></code> | <code>string</code> | The OU name to match. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailRuleProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* A rule for new account creation in Organizations

A description of the rule's purpose.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailRuleProps.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether the rule is enabled.

---

##### `eventBus`<sup>Optional</sup> <a name="eventBus" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailRuleProps.property.eventBus"></a>

```typescript
public readonly eventBus: IEventBus;
```

- *Type:* aws-cdk-lib.aws_events.IEventBus
- *Default:* The default event bus.

The event bus to associate with this rule.

---

##### `eventState`<sup>Optional</sup> <a name="eventState" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailRuleProps.property.eventState"></a>

```typescript
public readonly eventState: EventStates;
```

- *Type:* <a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.EventStates">EventStates</a>
- *Default:* EventStates.SUCCEEDED

Which event state should this rule trigger for.

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailRuleProps.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID and uses that ID for the rule name. For more information, see Name Type.

A name for the rule.

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailRuleProps.property.targets"></a>

```typescript
public readonly targets: IRuleTarget[];
```

- *Type:* aws-cdk-lib.aws_events.IRuleTarget[]
- *Default:* No targets.

Targets to invoke when this rule matches an event.

---

##### `guardrailBehavior`<sup>Optional</sup> <a name="guardrailBehavior" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailRuleProps.property.guardrailBehavior"></a>

```typescript
public readonly guardrailBehavior: GuardrailBehaviors;
```

- *Type:* <a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailBehaviors">GuardrailBehaviors</a>

The guardrail behavior to match.

---

##### `guardrailId`<sup>Optional</sup> <a name="guardrailId" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailRuleProps.property.guardrailId"></a>

```typescript
public readonly guardrailId: string;
```

- *Type:* string

The guardrail ID to match.

---

##### `ouId`<sup>Optional</sup> <a name="ouId" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailRuleProps.property.ouId"></a>

```typescript
public readonly ouId: string;
```

- *Type:* string

The OU ID to match.

---

##### `ouName`<sup>Optional</sup> <a name="ouName" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailRuleProps.property.ouName"></a>

```typescript
public readonly ouName: string;
```

- *Type:* string

The OU name to match.

---

### OuRuleProps <a name="OuRuleProps" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.OuRuleProps"></a>

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.OuRuleProps.Initializer"></a>

```typescript
import { OuRuleProps } from '@renovosolutions/cdk-library-control-tower-lifecycle-events'

const ouRuleProps: OuRuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.OuRuleProps.property.description">description</a></code> | <code>string</code> | A description of the rule's purpose. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.OuRuleProps.property.enabled">enabled</a></code> | <code>boolean</code> | Indicates whether the rule is enabled. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.OuRuleProps.property.eventBus">eventBus</a></code> | <code>aws-cdk-lib.aws_events.IEventBus</code> | The event bus to associate with this rule. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.OuRuleProps.property.eventState">eventState</a></code> | <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.EventStates">EventStates</a></code> | Which event state should this rule trigger for. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.OuRuleProps.property.ruleName">ruleName</a></code> | <code>string</code> | A name for the rule. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.OuRuleProps.property.targets">targets</a></code> | <code>aws-cdk-lib.aws_events.IRuleTarget[]</code> | Targets to invoke when this rule matches an event. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.OuRuleProps.property.ouId">ouId</a></code> | <code>string</code> | The OU ID to match. |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.OuRuleProps.property.ouName">ouName</a></code> | <code>string</code> | The OU name to match. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.OuRuleProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* A rule for new account creation in Organizations

A description of the rule's purpose.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.OuRuleProps.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether the rule is enabled.

---

##### `eventBus`<sup>Optional</sup> <a name="eventBus" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.OuRuleProps.property.eventBus"></a>

```typescript
public readonly eventBus: IEventBus;
```

- *Type:* aws-cdk-lib.aws_events.IEventBus
- *Default:* The default event bus.

The event bus to associate with this rule.

---

##### `eventState`<sup>Optional</sup> <a name="eventState" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.OuRuleProps.property.eventState"></a>

```typescript
public readonly eventState: EventStates;
```

- *Type:* <a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.EventStates">EventStates</a>
- *Default:* EventStates.SUCCEEDED

Which event state should this rule trigger for.

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.OuRuleProps.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID and uses that ID for the rule name. For more information, see Name Type.

A name for the rule.

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.OuRuleProps.property.targets"></a>

```typescript
public readonly targets: IRuleTarget[];
```

- *Type:* aws-cdk-lib.aws_events.IRuleTarget[]
- *Default:* No targets.

Targets to invoke when this rule matches an event.

---

##### `ouId`<sup>Optional</sup> <a name="ouId" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.OuRuleProps.property.ouId"></a>

```typescript
public readonly ouId: string;
```

- *Type:* string

The OU ID to match.

---

##### `ouName`<sup>Optional</sup> <a name="ouName" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.OuRuleProps.property.ouName"></a>

```typescript
public readonly ouName: string;
```

- *Type:* string

The OU name to match.

---



## Enums <a name="Enums" id="Enums"></a>

### EventStates <a name="EventStates" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EventStates"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.EventStates.SUCCEEDED">SUCCEEDED</a></code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.EventStates.FAILED">FAILED</a></code> | *No description.* |

---

##### `SUCCEEDED` <a name="SUCCEEDED" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EventStates.SUCCEEDED"></a>

---


##### `FAILED` <a name="FAILED" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.EventStates.FAILED"></a>

---


### GuardrailBehaviors <a name="GuardrailBehaviors" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailBehaviors"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailBehaviors.DETECTIVE">DETECTIVE</a></code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailBehaviors.PREVENTATIVE">PREVENTATIVE</a></code> | *No description.* |

---

##### `DETECTIVE` <a name="DETECTIVE" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailBehaviors.DETECTIVE"></a>

---


##### `PREVENTATIVE` <a name="PREVENTATIVE" id="@renovosolutions/cdk-library-control-tower-lifecycle-events.GuardrailBehaviors.PREVENTATIVE"></a>

---

