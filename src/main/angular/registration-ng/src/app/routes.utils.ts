import { Routes, UrlMatchResult, UrlSegment } from "@angular/router";
import { CourtesyPageComponent } from "./courtesy-page/courtesy-page.component";
import { RegContainerComponent } from "./reg-container/reg-container.component";
import { RegContainer2Component } from "./reg-container2/reg-container2.component";
import { TypageComponent } from "./typage/typage.component";

export class RoutesUtils {

    static getRoutes(): Routes {
        return [
        {
          matcher: (u) => this.checkQSUrl(u, [undefined, null, ""]),
          component: RegContainerComponent 
        },
        {
          matcher: (u) => this.checkQSUrl(u, "step1"),
          component: RegContainerComponent
        },
        {
          matcher: (u) => this.checkQSUrl(u, "step2"),
          component: RegContainer2Component
        },
        {
          matcher: (u) => this.checkQSUrl(u, "typage"),
          component: TypageComponent
        },
        {
          matcher: (u) => this.checkQSUrl(u, "courtesy"),
          component: CourtesyPageComponent
        },
        { path: "pippo", component: RegContainerComponent },
        { path: "", component: RegContainerComponent }
      
      ]
    }
      
    private static checkQSUrl(url: UrlSegment[], flowsToMatch: string|string[]): UrlMatchResult {
        {
          const params: any = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, p: string) => searchParams.get(p),
          });
          let page = params.navPage;
      
          let selFlows: string[] = []; 
          if (flowsToMatch instanceof Array) {
            selFlows = flowsToMatch;
          } else {
            selFlows.push(flowsToMatch);
          }
      
          for (const s of selFlows) {
            if (page === s) {
              return {
                consumed: url
              }
            }
          }
          
      
      
          return null;
        }
      }

}