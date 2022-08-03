/*!
 * @license
 * Copyright 2019 Alfresco, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Model } from '../api/types';

export interface ModelState extends EntityState<Model>  {
    loading: boolean;
    loaded: boolean;
    entityContents: {[key: string]: any};
    draftEntities: {
        entities: {[id: string]: Model};
        entityContents: {[key: string]: any};
    };
}

export const adapter = createEntityAdapter<Model>();

export const initialModelsEntitiesState = adapter.getInitialState<ModelState>({
    ...adapter.getInitialState(),
    loading: false,
    loaded: false,
    entityContents: {},
    draftEntities: {
        entities: {},
        entityContents: {}
    }
});
