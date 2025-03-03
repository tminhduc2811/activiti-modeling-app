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

import { Injectable } from '@angular/core';
import { createSelector } from '@ngrx/store';
import { getEntitiesState } from './entity.selectors';

export const selectModelEntityContainer = (modelType: string) => createSelector(getEntitiesState, (state: any) => state[modelType]);
export const selectModelEntityContents = (modelType: string) => createSelector(selectModelEntityContainer(modelType), state => state.entityContents);
export const selectModelEntity = (modelType: string, modelId: string) => createSelector(selectModelEntityContainer(modelType), state => state.entities[modelId]);

@Injectable({
    providedIn: 'root'
})
export class ModelEntitySelectors {
    constructor(private modelType: string) {}

    selectModelContentById(modelId: string) {
        return createSelector(
            selectModelEntityContents(this.modelType),
            (entityContents) => entityContents[modelId]
        );
    }

    selectModelMetadataById(modelId: string) {
        return createSelector(
            selectModelEntityContainer(this.modelType),
            state => state.entities[modelId]
        );
    }

}
