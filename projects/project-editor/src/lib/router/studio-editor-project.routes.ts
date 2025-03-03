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

import { Routes } from '@angular/router';
import { ProjectContentComponent } from '../components/project-content/project-content.component';
import { ProjectNavigationComponent } from '../components/project-navigation/project-navigation.component';
import { MODEL_EDITOR_ROUTES } from '@alfresco-dbp/modeling-shared/sdk';

export const studioProjectEditorRoutes: Routes = [
    { path: '', component: ProjectContentComponent, data: { injectTo: MODEL_EDITOR_ROUTES } },
    { path: '', component: ProjectNavigationComponent, data: { injectTo: MODEL_EDITOR_ROUTES }, outlet: 'left-sidebar' }
];
