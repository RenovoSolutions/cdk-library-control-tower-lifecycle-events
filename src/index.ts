import {
  aws_events as events,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

export enum GuardrailBehaviors {
  DETECTIVE = 'DETECTIVE',
  PREVENTATIVE = 'PREVENTATIVE',
}

export enum EventStates {
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
}

export interface BaseRuleProps {
  /**
   * A description of the rule's purpose.
   *
   * @default - A rule for new account creation in Organizations
   */
  readonly description?: string;
  /**
   * A name for the rule.
   *
   * @default - AWS CloudFormation generates a unique physical ID and uses that ID
   * for the rule name. For more information, see Name Type.
   */
  readonly ruleName?: string;
  /**
   * Indicates whether the rule is enabled.
   *
   * @default true
   */
  readonly enabled?: boolean;
  /**
   * Targets to invoke when this rule matches an event.
   *
   * @default - No targets.
   */
  readonly targets?: events.IRuleTarget[];
  /**
    * The event bus to associate with this rule.
    *
    * @default - The default event bus.
    */
  readonly eventBus?: events.IEventBus;
  /**
   * Which event state should this rule trigger for.
   *
   * @default - EventStates.SUCCEEDED
   */
  readonly eventState?: EventStates;
}

export interface AccountRuleProps extends BaseRuleProps {
  /**
   * The account ID to match.
   */
  readonly accountId?: string;
  /**
   * The account name to match.
   */
  readonly accountName?: string;
  /**
   * The OU ID to match.
   */
  readonly ouId?: string;
  /**
   * The OU name to match.
   */
  readonly ouName?: string;
}

export interface GuardrailRuleProps extends BaseRuleProps {
  /**
   * The OU ID to match.
   */
  readonly ouId?: string;
  /**
   * The OU name to match.
   */
  readonly ouName?: string;
  /**
   * The guardrail ID to match
   */
  readonly guardrailId?: string;
  /**
   * The guardrail behavior to match
   */
  readonly guardrailBehavior?: GuardrailBehaviors;
}

export interface OuRuleProps extends BaseRuleProps {
  /**
   * The OU ID to match.
   */
  readonly ouId?: string;
  /**
   * The OU name to match.
   */
  readonly ouName?: string;
}

/**
 * A rule for matching events from CloudTrail where Organizations created a new account.
 */
export class CreatedAccountByOrganizationsRule extends events.Rule {
  constructor(scope: Construct, id: string, props: BaseRuleProps) {
    const eventPattern = {
      source: ['aws.organizations'],
      detailType: ['AWS Service Event via CloudTrail'],
      detail: {
        eventName: [
          'CreateAccountResult',
        ],
        serviceEventDetails: {
          createAccountStatus: {
            state: [props.eventState ?? EventStates.SUCCEEDED],
          },
        },
      },
    };
    const description = props.description ?? 'A rule for new account creation in Organizations.';
    super(scope, id, { eventPattern, description, ...props });
  }
}

/**
 * A rule for matching events from CloudTrail where Control Tower created a new account.
 */
export class CreatedAccountRule extends events.Rule {
  constructor(scope: Construct, id: string, props: OuRuleProps) {
    const eventPattern = {
      source: ['aws.controltower'],
      detailType: ['AWS Service Event via CloudTrail'],
      detail: {
        eventName: [
          'CreateManagedAccount',
        ],
        serviceEventDetails: {
          createManagedAccountStatus: {
            organizationalUnit: {
              organizationalUnitName: props.ouName,
              organizationalUnitId: props.ouId,
            },
            state: [props.eventState ?? EventStates.SUCCEEDED],
          },
        },
      },
    };
    const description = props.description ?? 'A rule for new account creation in Control Tower.';
    super(scope, id, { eventPattern, description, ...props });
  }
}

/**
 * A rule for matching events from CloudTrail where Control Tower updated a managed account
 */
export class UpdatedManagedAccountRule extends events.Rule {
  constructor(scope: Construct, id: string, props: AccountRuleProps) {
    const eventPattern = {
      source: ['aws.organizations'],
      detailType: ['AWS Service Event via CloudTrail'],
      detail: {
        eventName: [
          'UpdateManagedAccount',
        ],
        serviceEventDetails: {
          updateManagedAccountStatus: {
            organizationalUnit: {
              organizationalUnitName: props.ouName,
              organizationalUnitId: props.ouId,
            },
            account: {
              accountName: props.accountName,
              accountId: props.accountId,
            },
            state: [props.eventState ?? EventStates.SUCCEEDED],
          },
        },
      },
    };

    const description = props.description ?? 'A rule for updated accounts managed by Control Tower.';
    super(scope, id, { eventPattern, description, ...props });
  }
}

/**
 * A rule for matching events from CloudTrail where Control Tower registered a new Organizational Unit
 */
export class RegisteredOrganizationalUnitRule extends events.Rule {
  constructor(scope: Construct, id: string, props: BaseRuleProps) {
    const eventPattern = {
      source: ['aws.organizations'],
      detailType: ['AWS Service Event via CloudTrail'],
      detail: {
        eventName: [
          'RegisterOrganizationalUnit',
        ],
        serviceEventDetails: {
          registerOrganizationalUnitStatus: {
            state: [props.eventState ?? EventStates.SUCCEEDED],
          },
        },
      },
    };

    const description = props.description ?? 'A rule for registered OUs in Control Tower.';
    super(scope, id, { eventPattern, description, ...props });
  }
}

/**
 * A rule for matching events from CloudTrail where Control Tower deregistered an Organizational Unit
 */
export class DeregisteredOrganizationalUnitRule extends events.Rule {
  constructor(scope: Construct, id: string, props: OuRuleProps) {
    const eventPattern = {
      source: ['aws.controltower'],
      detailType: ['AWS Service Event via CloudTrail'],
      detail: {
        eventName: [
          'DeregisterOrganizationalUnit',
        ],
        serviceEventDetails: {
          deregisterOrganizationalUnitStatus: {
            organizationalUnit: {
              organizationalUnitName: props.ouName,
              organizationalUnitId: props.ouId,
            },
            state: [props.eventState ?? EventStates.SUCCEEDED],
          },
        },
      },
    };
    const description = props.description ?? 'A rule for deregistered OUs in Control Tower.';
    super(scope, id, { eventPattern, description, ...props });
  }
}

/**
 * A rule for matching events from CloudTrail where a guard rail was disabled via Control Tower for an Organizational Unit
 */
export class DisabledGuardrailRule extends events.Rule {
  constructor(scope: Construct, id: string, props: GuardrailRuleProps) {
    const eventPattern = {
      source: ['aws.organizations'],
      detailType: ['AWS Service Event via CloudTrail'],
      detail: {
        eventName: [
          'DisableGuardrail',
        ],
        serviceEventDetails: {
          disableGuardrailStatus: {
            organizationalUnits: [
              {
                organizationalUnitName: props.ouName,
                organizationalUnitId: props.ouId,
              },
            ],
            guardrails: [
              {
                guardrailId: props.guardrailId,
                guardrailBehavior: props.guardrailBehavior,
              },
            ],
            state: [props.eventState ?? EventStates.SUCCEEDED],
          },
        },
      },
    };

    const description = props.description ?? 'A rule for disabled guardrails in Control Tower.';
    super(scope, id, { eventPattern, description, ...props });
  }
}

/**
 * A rule for matching events from CloudTrail where a guardrail was enabled via Control Tower for an Organizational Unit
 */
export class EnabledGuardrailRule extends events.Rule {
  constructor(scope: Construct, id: string, props: GuardrailRuleProps) {
    const eventPattern = {
      source: ['aws.organizations'],
      detailType: ['AWS Service Event via CloudTrail'],
      detail: {
        eventName: [
          'EnableGuardrail',
        ],
        serviceEventDetails: {
          enableGuardrailStatus: {
            organizationalUnits: [
              {
                organizationalUnitName: props.ouName,
                organizationalUnitId: props.ouId,
              },
            ],
            guardrails: [
              {
                guardrailId: props.guardrailId,
                guardrailBehavior: props.guardrailBehavior,
              },
            ],
            state: [props.eventState ?? EventStates.SUCCEEDED],
          },
        },
      },
    };

    const description = props.description ?? 'A rule for enabled guardrails in Control Tower.';
    super(scope, id, { eventPattern, description, ...props });
  }
}

/**
 * A rule for matching events from CloudTrail where a landing zone was setup via Control Tower
 */
export class SetupLandingZoneRule extends events.Rule {
  constructor(scope: Construct, id: string, props: BaseRuleProps) {
    const eventPattern = {
      source: ['aws.organizations'],
      detailType: ['AWS Service Event via CloudTrail'],
      detail: {
        eventName: [
          'SetupLandingZone',
        ],
        serviceEventDetails: {
          setupLandingZoneStatus: {
            state: [props.eventState ?? EventStates.SUCCEEDED],
          },
        },
      },
    };

    const description = props.description ?? 'A rule for landing zone setup in Control Tower.';
    super(scope, id, { eventPattern, description, ...props });
  }
}

/**
 * A rule for matching events from CloudTrail where a landing zone was updated via Control Tower
 */
export class UpdatedLandingZoneRule extends events.Rule {
  constructor(scope: Construct, id: string, props: BaseRuleProps) {
    const eventPattern = {
      source: ['aws.organizations'],
      detailType: ['AWS Service Event via CloudTrail'],
      detail: {
        eventName: [
          'UpdateLandingZone',
        ],
        serviceEventDetails: {
          updateLandingZoneStatus: {
            state: [props.eventState ?? EventStates.SUCCEEDED],
          },
        },
      },
    };

    const description = props.description ?? 'A rule for landing zone updates in Control Tower.';
    super(scope, id, { eventPattern, description, ...props });
  }
}
