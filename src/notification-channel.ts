// https://www.terraform.io/docs/providers/newrelic/r/notification_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Required) The id of the destination.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/notification_channel#destination_id NotificationChannel#destination_id}
  */
  readonly destinationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/notification_channel#id NotificationChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Required) The name of the channel.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/notification_channel#name NotificationChannel#name}
  */
  readonly name: string;
  /**
  * (Required) The type of the channel product. One of: (ALERTS, DISCUSSIONS, ERROR_TRACKING, NTFC, SHARING, PD, IINT).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/notification_channel#product NotificationChannel#product}
  */
  readonly product: string;
  /**
  * (Required) The type of the channel. One of: (WEBHOOK, EMAIL, SERVICENOW_INCIDENTS, PAGERDUTY_ACCOUNT_INTEGRATION, PAGERDUTY_SERVICE_INTEGRATION).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/notification_channel#type NotificationChannel#type}
  */
  readonly type: string;
  /**
  * properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/notification_channel#properties NotificationChannel#properties}
  */
  readonly properties?: NotificationChannelProperties[] | cdktf.IResolvable;
}
export interface NotificationChannelProperties {
  /**
  * Notification channel property display key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/notification_channel#display_value NotificationChannel#display_value}
  */
  readonly displayValue?: string;
  /**
  * Notification channel property key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/notification_channel#key NotificationChannel#key}
  */
  readonly key: string;
  /**
  * Notification channel property label.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/notification_channel#label NotificationChannel#label}
  */
  readonly label?: string;
  /**
  * Notification channel property value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/notification_channel#value NotificationChannel#value}
  */
  readonly value: string;
}

export function notificationChannelPropertiesToTerraform(struct?: NotificationChannelProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_value: cdktf.stringToTerraform(struct!.displayValue),
    key: cdktf.stringToTerraform(struct!.key),
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class NotificationChannelPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NotificationChannelProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayValue = this._displayValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationChannelProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayValue = undefined;
      this._key = undefined;
      this._label = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayValue = value.displayValue;
      this._key = value.key;
      this._label = value.label;
      this._value = value.value;
    }
  }

  // display_value - computed: false, optional: true, required: false
  private _displayValue?: string; 
  public get displayValue() {
    return this.getStringAttribute('display_value');
  }
  public set displayValue(value: string) {
    this._displayValue = value;
  }
  public resetDisplayValue() {
    this._displayValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayValueInput() {
    return this._displayValue;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class NotificationChannelPropertiesList extends cdktf.ComplexList {
  public internalValue? : NotificationChannelProperties[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NotificationChannelPropertiesOutputReference {
    return new NotificationChannelPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/notification_channel newrelic_notification_channel}
*/
export class NotificationChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_notification_channel";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/notification_channel newrelic_notification_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationChannelConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_notification_channel',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '2.49.1',
        providerVersionConstraint: '~> 2.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._destinationId = config.destinationId;
    this._id = config.id;
    this._name = config.name;
    this._product = config.product;
    this._type = config.type;
    this._properties.internalValue = config.properties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_id - computed: false, optional: false, required: true
  private _destinationId?: string; 
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }
  public set destinationId(value: string) {
    this._destinationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIdInput() {
    return this._destinationId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new NotificationChannelPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: NotificationChannelProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_id: cdktf.stringToTerraform(this._destinationId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      product: cdktf.stringToTerraform(this._product),
      type: cdktf.stringToTerraform(this._type),
      properties: cdktf.listMapper(notificationChannelPropertiesToTerraform)(this._properties.internalValue),
    };
  }
}
