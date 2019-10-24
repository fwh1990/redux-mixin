import { BaseModel } from '../core/BaseModel';
import { useComputed } from 'vue-hooks';
import { HttpServiceWithMeta, UseSelector } from '../core/utils/types';
import { METHOD } from '../core/utils/method';
import { getStore } from '../core/utils/createReduxStore';

export abstract class Model<Data = null> extends BaseModel<Data> {
  protected switchReduxSelector<TState = any, TSelected = any>(): UseSelector<TState, TSelected> {
    return useComputed.bind(getStore().getState());
  }

  protected patch<Response>(uri: string): HttpServiceWithMeta<Data, Response, unknown> {
    return this.serviceAction<Response>(uri, METHOD.patch);
  }
}
