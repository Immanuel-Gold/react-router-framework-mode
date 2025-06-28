import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("/about", "routes/about.tsx"),
    ...prefix("/info", [
      route("contact", "routes/contact.tsx"),
      route("team", "routes/team.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
