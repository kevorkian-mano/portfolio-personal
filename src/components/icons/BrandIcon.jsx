import {
  siPython, siOpenjdk, siJavascript, siTypescript, siC, siCplusplus, siDart,
  siHtml5, siCss, siReact, siNextdotjs, siNodedotjs, siNestjs, siSpringboot,
  siGraphql, siFlutter, siPostgresql, siNeon, siMongodb, siApachecassandra,
  siRedis, siFirebase, siPrisma, siApachespark, siNumpy, siPandas, siScikitlearn,
  siLangchain, siModelcontextprotocol, siN8n, siGithubcopilot, siDocker, siLinux,
  siGit, siPostman, siJira, siFigma, siUml, siApachekafka, siPlotly, siGithub,
} from 'simple-icons'

// Map of skill/tech label -> simple-icons brand mark. Rendered monochrome.
const REGISTRY = {
  'Python': siPython,
  'Java': siOpenjdk,
  'JavaScript (ES6+)': siJavascript,
  'JavaScript': siJavascript,
  'TypeScript': siTypescript,
  'C': siC,
  'C++': siCplusplus,
  'Dart': siDart,
  'HTML5': siHtml5,
  'CSS3': siCss,
  'React.js': siReact,
  'React': siReact,
  'Next.js': siNextdotjs,
  'Node.js': siNodedotjs,
  'Nest.js': siNestjs,
  'Spring Boot': siSpringboot,
  'GraphQL': siGraphql,
  'Flutter': siFlutter,
  'PostgreSQL': siPostgresql,
  'NeonDB': siNeon,
  'MongoDB': siMongodb,
  'Cassandra': siApachecassandra,
  'Redis': siRedis,
  'Firebase': siFirebase,
  'Prisma ORM': siPrisma,
  'Apache Spark': siApachespark,
  'SparkSQL': siApachespark,
  'Spark SQL': siApachespark,
  'SparkML': siApachespark,
  'PySpark': siApachespark,
  'NumPy': siNumpy,
  'Pandas': siPandas,
  'Scikit-learn': siScikitlearn,
  'LangGraph': siLangchain,
  'MCP': siModelcontextprotocol,
  'n8n': siN8n,
  'Copilot Studio': siGithubcopilot,
  'Docker': siDocker,
  'Linux/WSL': siLinux,
  'Git': siGit,
  'Postman': siPostman,
  'Jira': siJira,
  'Figma': siFigma,
  'UML': siUml,
  'Kafka': siApachekafka,
  'Plotly': siPlotly,
  'GitHub API': siGithub,
}

export function brandFor(label) {
  return REGISTRY[label] || null
}

export default function BrandIcon({ label, size = 16, className = '' }) {
  const icon = brandFor(label)
  if (!icon) return null
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  )
}
