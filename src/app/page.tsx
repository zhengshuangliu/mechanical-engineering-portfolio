import { ImageViewer } from '@/components/ImageViewer';
import { SiteFooter, SiteHeader } from '@/components/SiteHeader';
import { sitePath } from '@/lib/site';

const capabilities = [
  ['01', 'CAD MODELING', 'SOLIDWORKS', 'Part modeling, assembly architecture, interface control, engineering drawings and mass properties.'],
  ['02', 'FINITE ELEMENT ANALYSIS', 'ANSYS Mechanical', 'Static structural analysis, contacts, boundary conditions, multi-load cases and mesh sensitivity.'],
  ['03', 'STRUCTURAL OPTIMIZATION', 'Evidence-led iteration', 'Remove low-contribution material while preserving interfaces, load paths, stiffness and manufacturability.'],
  ['04', 'ENGINEERING DATA', 'Python', 'Load calculations, acceptance checks, reproducible plots, CSV processing and automated verification.'],
];

const workflow = [
  ['01', 'DEFINE', 'Load, interface and acceptance criteria'],
  ['02', 'MODEL', 'CAD architecture and manufacturing constraints'],
  ['03', 'SIMULATE', 'Mesh, contacts and load combinations'],
  ['04', 'OPTIMIZE', 'Evidence-based structural iteration'],
  ['05', 'COMMUNICATE', 'Decision, margin and limitation'],
];

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="home-hero shell">
        <div className="hero-copy">
          <p className="overline"><span /> MECHANICAL DESIGN &amp; CAE ENGINEERING PORTFOLIO</p>
          <p className="hero-name">ZHENGSHUANG LIU / 刘政塽</p>
          <h1>Mechanical<br />Design <em>Engineer</em></h1>
          <p className="hero-statement">Focused on mechanical design, finite element analysis and structural optimization.</p>
          <p className="hero-detail">从载荷定义、CAD 建模到多工况 FEA 与结构迭代，以可追溯数据回答“为什么这样设计、是否可靠、还可以怎样改进”。</p>
          <div className="skill-rail" aria-label="Core engineering tools">
            {['SOLIDWORKS', 'ANSYS MECHANICAL', 'PYTHON', 'CAD', 'FEA'].map((skill) => <span key={skill}>{skill}</span>)}
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">VIEW PROJECTS <b>↓</b></a>
            <a className="button button-ghost" href="https://github.com/zhengshuangliu/mechanical-engineering-portfolio">VIEW GITHUB <b>↗</b></a>
          </div>
        </div>
        <div className="hero-stage">
          <div className="stage-top"><span>FEATURED ANALYSIS / LC3</span><span>ANSYS MECHANICAL</span></div>
          <ImageViewer src={sitePath('/bracket-fine-stress.png')} alt="Robot joint bracket equivalent stress result" caption="Robot joint bracket · governing load case" />
          <div className="stage-data">
            <div><small>MAX STRESS</small><strong>32.919 MPa</strong></div>
            <div><small>DEFORMATION</small><strong>0.006209 mm</strong></div>
            <div><small>SAFETY FACTOR</small><strong>7.59</strong></div>
          </div>
        </div>
      </section>

      <section className="home-stats" aria-label="Project statistics">
        <div><strong>2</strong><span>ENGINEERING PROJECTS</span></div>
        <div><strong>CAD + FEA</strong><span>END-TO-END WORKFLOW</span></div>
        <div><strong>MULTI-CONDITION</strong><span>LOAD-CASE ANALYSIS</span></div>
        <div><strong>STRUCTURAL</strong><span>OPTIMIZATION &amp; JUDGMENT</span></div>
      </section>

      <section className="featured-projects shell section-space" id="projects">
        <header className="section-title-row">
          <div><p className="section-label">SELECTED ENGINEERING WORK</p><h2>Two projects.<br /><em>Two structural scales.</em></h2></div>
          <p>从机器人轻量化支架到 DN600 大型承压装备，展示统一的设计输入、CAD、仿真验证、结果解释与工程结论链路。</p>
        </header>

        <article className="project-feature project-feature-robot">
          <div className="project-feature-copy">
            <p className="project-number">PROJECT / 01</p>
            <h3>机器人关节支架<br />结构优化设计</h3>
            <p>在安装接口与制造约束不变的前提下，通过载荷路径判断、三版 CAD 迭代和多工况静力验证，实现可证明的轻量化。</p>
            <div className="feature-metrics"><span><b>−16.0%</b>Mass</span><span><b>32.919 MPa</b>Stress</span><span><b>7.59</b>FoS</span></div>
            <a className="text-link" href={sitePath('/projects/robot-bracket/')}>VIEW ENGINEERING CASE <b>↗</b></a>
          </div>
          <div className="project-feature-media">
            <ImageViewer src={sitePath('/assets/projects/robot-bracket/optimization-comparison.png')} alt="V1 to V3 robot bracket optimization comparison" caption="V1 baseline → V3 final design" />
          </div>
        </article>

        <article className="project-feature project-feature-valve">
          <div className="project-feature-copy">
            <p className="project-number">PROJECT / 02</p>
            <h3>大型全焊接固定球阀<br />结构完整性分析</h3>
            <p>面向 DN600、Class 600 油气管线承压装备，建立六部件整阀模型，并对压力、温度、轴向力和弯矩组合进行有限元评价。</p>
            <div className="feature-metrics"><span><b>10.2 MPa</b>Pressure</span><span><b>4</b>Load cases</span><span><b>1.88</b>FoS</span></div>
            <a className="text-link" href={sitePath('/projects/ball-valve/')}>VIEW ENGINEERING CASE <b>↗</b></a>
          </div>
          <div className="project-feature-media">
            <ImageViewer src={sitePath('/assets/projects/ball-valve/governing-case.png')} alt="Ball valve LC3 governing load case" caption="DN600 Class 600 · governing mechanical case" />
          </div>
        </article>
      </section>

      <section className="process-section" id="process">
        <div className="shell">
          <header className="section-title-row inverse-title">
            <div><p className="section-label">ENGINEERING DEVELOPMENT PROCESS</p><h2>Evidence before<br /><em>decisions.</em></h2></div>
            <p>每一步都明确输入、判断与输出，让设计选择可以被复核，而不是只展示最终模型或一张云图。</p>
          </header>
          <div className="workflow-rail">
            {workflow.map(([n, title, body]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="capability-section shell section-space" id="capabilities">
        <header className="section-title-row">
          <div><p className="section-label">CAPABILITIES</p><h2>Tools support the work.<br /><em>Judgment leads it.</em></h2></div>
        </header>
        <div className="capability-grid">
          {capabilities.map(([n, label, title, body]) => <article key={n}><span>{n} / {label}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="shell about-grid">
          <div><p className="section-label">PROFILE</p><h2>Mechanical design<br />meets <em>CAE evidence.</em></h2></div>
          <div>
            <p className="about-lede">I connect CAD, structural simulation and engineering data processing to develop mechanical concepts that are measurable, reviewable and manufacturable.</p>
            <div className="education"><span>2026—2027</span><p><b>City University of Hong Kong</b><br />MSc Mechanical Engineering</p></div>
            <div className="education"><span>2022—2026</span><p><b>Sichuan University</b><br />BEng Mechanical Design, Manufacturing and Automation</p></div>
            <div className="contact-row">
              <a href="https://github.com/zhengshuangliu/mechanical-engineering-portfolio">GITHUB REPOSITORY ↗</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
