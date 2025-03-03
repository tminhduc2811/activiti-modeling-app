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

import { Action } from '@ngrx/store';
import { InjectionToken } from '@angular/core';

export interface ProjectContextMenuAction extends Action {
    projectId: string;
}

export interface ProjectContextMenuDialog {
    title: string;
}

export interface ProjectContextMenuOption {
    title: string;
    actionClass: ProjectContextMenuActionClass;
    automationId: string;
    icon: string;
}

export interface ProjectContextMenuActionClass  {
    // tslint:disable-next-line
    new(projectId: string): ProjectContextMenuAction;
}

export const PROJECT_CONTEXT_MENU_OPTIONS = new InjectionToken<ProjectContextMenuOption[]>('project-context-menu-options');
export const PROJECT_MENU_HEADER_ACTIONS = new InjectionToken<ProjectContextMenuOption[]>('project-menu-header-actions');
