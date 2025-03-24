/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/Screens/AuthScreen`; params?: Router.UnknownInputParams; } | { pathname: `/Screens/Login`; params?: Router.UnknownInputParams; } | { pathname: `/Screens/MainMenu`; params?: Router.UnknownInputParams; } | { pathname: `/Screens/SignUp`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/Screens/AuthScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/Screens/Login`; params?: Router.UnknownOutputParams; } | { pathname: `/Screens/MainMenu`; params?: Router.UnknownOutputParams; } | { pathname: `/Screens/SignUp`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/Screens/AuthScreen${`?${string}` | `#${string}` | ''}` | `/Screens/Login${`?${string}` | `#${string}` | ''}` | `/Screens/MainMenu${`?${string}` | `#${string}` | ''}` | `/Screens/SignUp${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/Screens/AuthScreen`; params?: Router.UnknownInputParams; } | { pathname: `/Screens/Login`; params?: Router.UnknownInputParams; } | { pathname: `/Screens/MainMenu`; params?: Router.UnknownInputParams; } | { pathname: `/Screens/SignUp`; params?: Router.UnknownInputParams; };
    }
  }
}
