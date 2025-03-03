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

import { LayoutService } from '@alfresco-dbp/modeling-shared/sdk';
import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
    templateUrl: './studio-layout.component.html',
    styleUrls: ['./studio-layout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class StudioLayoutComponent implements OnDestroy {

    leftOpened = true;
    onDestroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private layoutService: LayoutService) {
        this.layoutService.sidenavToggleEvent$
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(() => {
                this.leftOpened = !this.leftOpened;
            });
    }

    ngOnDestroy(): void {
        this.onDestroy$.next(true);
        this.onDestroy$.complete();
    }

    get isMobileScreenSize(): boolean {
        return this.layoutService.isSmallScreenWidth();
    }
}
