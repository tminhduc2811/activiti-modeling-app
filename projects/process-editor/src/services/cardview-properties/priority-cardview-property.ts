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

import { CardViewSelectItemModel } from '@alfresco/adf-core';
import { ElementHelper } from '../bpmn-js/element.helper';
import { BpmnProperty } from '@alfresco-dbp/modeling-shared/sdk';
import { of } from 'rxjs';
import { FactoryProps } from './interfaces/cardview-properties.interfaces';

const propertyName = BpmnProperty.priority;

export function createPriorityProperty({ element, appConfigService }: FactoryProps) {
    return new CardViewSelectItemModel({
        label: 'PROCESS_EDITOR.ELEMENT_PROPERTIES.PRIORITY',
        options$: of(appConfigService.get('process-modeler.priorities')),
        value: ElementHelper.getProperty(element, propertyName) || 0,
        key: propertyName,
        editable: true,
        data: { id: element.id }
    });
}
