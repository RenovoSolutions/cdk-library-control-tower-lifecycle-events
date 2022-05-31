import {
  aws_events as events,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

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

/**
 * A rule for matching events from CloudTrail where Organizations created a new account.
 */
export class AccountCreatedByOrganizationsSuccessfullyRule extends events.Rule {
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
            state: ['SUCCEEDED'],
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
export class AccountCreatedByControlTowerSuccessfullyRule extends events.Rule {
  constructor(scope: Construct, id: string, props: AccountRuleProps) {
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
            state: ['SUCCEEDED'],
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
export class AccountUpdatedByControlTowerSuccessfullyRule extends events.Rule {
  constructor(scope: Construct, id: string, props: AccountRuleProps) {
    const eventPattern = {
      source: ['aws.organizations'],
      detailType: ['AWS Service Event via CloudTrail'],
      detail: {
        eventName: [
          'updateManagedAccountStatus',
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
            state: ['SUCCEEDED'],
          },
        },
      },
    };

    const description = props.description ?? 'A rule for new account creation in Organizations.';
    super(scope, id, { eventPattern, description, ...props });
  }
}
