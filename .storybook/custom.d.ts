declare module "*.svg" {
  import React = require('react');
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const content: any;
  export default content;
}

declare module "*.jpg" {
  const content: any;
  export default content;
}