"use client";
import styles from "./RoutesSitemap.module.scss";

const firstGoalRoutes = [
  { folder: "client-side-implementation", path: "/client-side-implementation" },
  { folder: "server-side-implementation", path: "/server-side-implementation" },
];

const secondGoalGroups = [
  {
    name: "(advanced-reduce)",
    folder: "advanced-reduce",
    routes: [{ label: "page.tsx", path: "/advanced-reduce" }],
  },
  {
    name: "(basic-destructuring)",
    folder: "countries",
    routes: [{ label: "page.tsx", path: "/countries" }],
  },
  {
    name: "(functional-array-methods)",
    folder: null,
    routes: [
      { label: "functional-arrays/page.tsx", path: "/functional-arrays" },
      { label: "map-filter-combination/page.tsx", path: "/map-filter-combination" },
    ],
  },
  {
    name: "(optional-chaining)",
    folder: "optional-chaining",
    routes: [
      { label: "page.tsx", path: "/optional-chaining" },
      { label: "exercise-1/page.tsx", path: "/optional-chaining/exercise-1" },
    ],
  },
];

function Pill({ path }: { path: string }) {
  return (
    <a href={path} className={styles.pill}>
      {path}
    </a>
  );
}

function SitemapCard({
  title,
  children,
  legend,
}: {
  title: string;
  children: React.ReactNode;
  legend: { color: string; label: string }[];
}) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>{title}</div>
      <div className={styles.tree}>{children}</div>
      <div className={styles.legend}>
        {legend.map((l) => (
          <span key={l.label}>
            <span className={styles.dot} style={{ background: l.color }} />
            {l.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function Row({
  indent,
  children,
}: {
  indent: number;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.row} style={{ paddingLeft: indent * 20 }}>
      {children}
    </div>
  );
}

function Connector({ last }: { last: boolean }) {
  return (
    <span className={styles.connector}>
      {last ? "└─ " : "├─ "}
    </span>
  );
}

export function FirstGoalSitemap() {
  return (
    <SitemapCard
      title="(first-goal-60-percent)"
      legend={[
        { color: "#7f77dd", label: "route group" },
        { color: "#1d9e75", label: "page → click to open" },
      ]}
    >
      <Row indent={0}>
        <span className={styles.root}>app/</span>
      </Row>

      <Row indent={1}>
        <span className={styles.connector}>└─ </span>
        <span className={styles.group}>
          (first-goal-60-percent)/
        </span>
      </Row>

      {firstGoalRoutes.map((route, i) => (
        <div key={route.path}>
          <Row indent={2}>
            <Connector last={i === firstGoalRoutes.length - 1} />
            <span className={styles.folder}>{route.folder}/</span>
          </Row>

          <Row indent={3}>
            <span className={styles.connector}>└─ </span>
            <span className={styles.route}>page.tsx</span>
            <Pill path={route.path} />
          </Row>
        </div>
      ))}
    </SitemapCard>
  );
}

export function SecondGoalSitemap() {
  return (
    <SitemapCard
      title="(second-goal-40-percent)"
      legend={[
        { color: "#7f77dd", label: "route group" },
        { color: "#afa9ec", label: "nested group" },
        { color: "#1d9e75", label: "page → click to open" },
      ]}
    >
      <Row indent={0}>
        <span className={styles.root}>app/</span>
      </Row>

      <Row indent={1}>
        <span className={styles.connector}>└─ </span>
        <span className={styles.group}>
          (second-goal-40-percent)/
        </span>
      </Row>

      {secondGoalGroups.map((group, gi) => (
        <div key={group.name}>
          <Row indent={2}>
            <Connector last={gi === secondGoalGroups.length - 1} />
            <span className={styles.subgroup}>
              {group.name}/
            </span>
          </Row>

          {group.folder && (
            <Row indent={3}>
              <span className={styles.connector}>└─ </span>
              <span className={styles.folder}>
                {group.folder}/
              </span>
            </Row>
          )}

          {group.routes.map((route, ri) => (
            <Row
              key={route.path}
              indent={group.folder ? 4 : 3}
            >
              <Connector last={ri === group.routes.length - 1} />
              <span className={styles.route}>
                {route.label}
              </span>
              <Pill path={route.path} />
            </Row>
          ))}
        </div>
      ))}
    </SitemapCard>
  );
}

export default function RoutesSitemaps() {
  return (
    <>
      <FirstGoalSitemap />
      <SecondGoalSitemap />
    </>
  );
}