import { EventEmitter } from "@angular/core";
import { ReactiveAdapterParam, ReactiveEventParameters, ReactiveState, ReactiveSubscribe } from "@cfcs/core";

type WithPrefix<Prefix extends string, Name extends string> = Prefix extends "" ? Name : `${Prefix}${Capitalize<Name>}`;

export type AngularEventsOutputs<
  Events extends readonly any[],
  PropertyPrefix extends string = "",
  EventPrefix extends string = "",
> = Events extends readonly [infer Name, ...infer Args] ? [`${WithPrefix<PropertyPrefix, string & Name>}: ${WithPrefix<EventPrefix, string & Name>}`, ...AngularEventsOutputs<Args, PropertyPrefix, EventPrefix>] : [];

export type AngularBindingProperties<
  Events extends Record<string, any>,
  PropertyPrefix extends string = "",
> = {
    [Key in keyof Events as WithPrefix<PropertyPrefix, string & Key>]: Events[Key];
  };


export type ReactiveEvents<
  Events extends Record<string, any>
> = {
    [Key in keyof Events]: EventEmitter<ReactiveEventParameters<Events, Key & string>[0]>;
  };

export type ReactiveResult<
  Instance extends ReactiveSubscribe<Record<string, any>>,
  State extends Record<string, any> = ReactiveState<Instance>,
  Methods extends keyof Partial<Instance> = any,
  Events extends Record<string, any> = {},
> = State & { [key in Methods]: Instance[key] } & ReactiveEvents<Events>;

export type ReactiveAdapterResult<
  Adapter extends ReactiveAdapterParam<any, any, any, any, any>,
  PropertyPrefix extends string = "",
>
  = Adapter extends ReactiveAdapterParam<infer Instance, infer State, infer Methods, any, infer Events>
  ? ReactiveResult<Instance, State, Methods, AngularBindingProperties<Events, PropertyPrefix>> : {};



// Names using framework prefix
export type AngularReactiveEvents<Events extends Record<string, any>> = ReactiveEvents<Events>;
export type AngularReactiveResult<
  Instance extends ReactiveSubscribe<Record<string, any>>,
  State extends Record<string, any> = ReactiveState<Instance>,
  Methods extends keyof Partial<Instance> = any,
  Events extends Record<string, any> = {},
> = ReactiveResult<
  Instance,
  State,
  Methods,
  Events
>;
export type AngularReactiveAdapterResult<
  Adapter extends ReactiveAdapterParam<any, any, any, any, any>
> = ReactiveAdapterResult<Adapter>;
