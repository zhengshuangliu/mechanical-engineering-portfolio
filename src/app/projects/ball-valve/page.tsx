import type { Metadata } from 'next';
import { ImageViewer } from '@/components/ImageViewer';
import { ProjectSection } from '@/components/ProjectSection';
import { SiteFooter, SiteHeader } from '@/components/SiteHeader';
import { sitePath } from '@/lib/site';

export const metadata: Metadata = {
  title: 'DN600 Class 600 Ball Valve Structural Integrity | Zhengshuang Liu',
  description: 'CAD assembly and multi-condition finite element evaluation of a DN600 Class 600 all-welded fixed ball valve.',
};

const loadCases = [
  ['LC1', 'Pressure', '10.2 MPa', '93.754 MPa', '0.650 mm'],
  ['LC2', 'Pressure + Temperature', '10.2 MPa + 121 °C', '126.01 MPa', '205.96 mm*'],
  ['LC3', 'Pressure + Axial load', '10.2 MPa + 2.88 MN', '133.04 MPa', '0.8127 mm'],
  ['LC4', 'Pressure + Bending moment', '10.2 MPa + 864 kN·m', '123.63 MPa', '0.658 mm'],
];

const regions = [
  ['VALVE BODY TRANSITION', '截面和曲率变化引起载荷路径转折，是承压壳体应力梯度重点观察区域。'],
  ['PIPE CONNECTION', '与管线载荷直接耦合，轴向力和弯矩会在接管邻近区域叠加。'],
  ['STEM SUPPORT', '阀杆与支承反力进入阀体的局部传力区域，需要关注约束与接触影响。'],
  ['SEAL REGION', '结构变形可能影响密封配合；全局模型用于筛查，最终密封结论仍需局部接触分析。'],
];

export default function BallValveProject() {
  return (
    <main id="top" className="project-page">
      <SiteHeader project />

      <section className="project-hero project-hero-valve">
        <div className="shell project-hero-grid">
          <div>
            <p className="overline"><span /> PROJECT 02 · PRESSURE EQUIPMENT</p>
            <h1>All-Welded Fixed Ball Valve<br /><em>Structural Integrity</em></h1>
            <p className="project-hero-lede">Multi-condition finite element evaluation of a DN600 Class 600 pressure boundary for oil and gas pipeline service.</p>
            <div className="project-tags"><span>DN600</span><span>CLASS 600</span><span>ANSYS</span><span>PRESSURE EQUIPMENT</span></div>
          </div>
          <ImageViewer src={sitePath('/ball-valve-cad.png')} alt="DN600 Class 600 all-welded fixed ball valve CAD assembly" caption="Six-component valve architecture" className="hero-project-image" />
        </div>
      </section>

      <section className="project-summary-strip">
        <div><span>BASE PRESSURE</span><strong>10.2 MPa</strong><small>All combined cases</small></div>
        <div><span>LOAD CASES</span><strong>4</strong><small>Pressure · thermal · axial · bending</small></div>
        <div><span>GOVERNING STRESS</span><strong>133.04 MPa</strong><small>LC3 pressure + axial</small></div>
        <div><span>SAFETY FACTOR</span><strong>1.88</strong><small>LF2 yield / LC3 stress</small></div>
      </section>

      <div className="project-sections shell">
        <ProjectSection index="01" label="OVERVIEW" title="A large pressure boundary, not an isolated component."
          visual={<ImageViewer src={sitePath('/assets/projects/ball-valve/design-boundary.png')} alt="Ball valve design boundary and pressure temperature requirements" caption="DN600 Class 600 design boundary" />}>
          <p>该项目面向油气输送管线中的大型全焊接固定球阀。分析对象同时承受高压介质、温度变化与管道附加载荷，必须从整阀传力和承压边界完整性进行评价。</p>
          <ul className="engineering-list"><li>600 mm 全通径，球体直径 930 mm</li><li>设计温度 −46—121 °C</li><li>全焊接阀体减少外泄漏路径，但提高结构与制造评价要求</li></ul>
        </ProjectSection>

        <ProjectSection index="02" label="DESIGN REQUIREMENT" title="Pressure, temperature and pipeline actions define the challenge."
          visual={<div className="challenge-panel"><span>ENGINEERING LOAD ENVELOPE</span><strong>10.2 MPa</strong><p>Base internal pressure</p><strong>2.88 MN</strong><p>Axial pipeline load</p><strong>864 kN·m</strong><p>Bending moment</p><strong>121 °C</strong><p>Maximum design temperature</p></div>}>
          <p>单一内压工况不足以代表现场服役。项目以 10.2 MPa 为基础，将温度、轴向载荷和弯矩分别与内压组合，比较不同载荷路径下的结构响应。</p>
          <div className="decision-note"><span>ACCEPTANCE BASIS</span><p>以最大等效应力、总变形、危险区域位置及材料屈服强度之间的裕度作为统一判断依据。</p></div>
        </ProjectSection>

        <ProjectSection index="03" label="CAD MODELING" title="Six components establish the complete force path."
          visual={<ImageViewer src={sitePath('/assets/projects/ball-valve/architecture.png')} alt="Exploded view of six-component ball valve architecture" caption="Valve body, ball, stems, seal ring and bearing" />}>
          <p>整阀模型包含阀体、球体、上阀杆、下阀杆、密封圈和轴承。建模重点不是外观细节，而是承压边界、球体支承、阀杆反力和密封邻近区域之间的结构关系。</p>
          <div className="component-list"><span>VALVE BODY</span><span>BALL</span><span>UPPER STEM</span><span>LOWER STEM</span><span>SEAL RING</span><span>BEARING</span></div>
        </ProjectSection>

        <ProjectSection index="04" label="SIMULATION SETUP" title="Reduce the model without breaking the structural logic."
          visual={<div className="visual-pair"><ImageViewer src={sitePath('/assets/projects/ball-valve/model-reduction.png')} alt="Ball valve model reduction and retained load path" caption="Model reduction" /><ImageViewer src={sitePath('/assets/projects/ball-valve/mesh.png')} alt="Ball valve tetrahedral finite element mesh" caption="1.07M nodes · 714,973 elements" /></div>} dark>
          <p>分析中简化细小圆角、孔和非关键制造特征，同时保留承压外形、截面过渡、接管区域、阀杆支承和密封邻近几何。最终模型采用四面体网格。</p>
          <div className="parameter-stack light-stack"><div><span>NODES</span><b>1,066,690</b></div><div><span>ELEMENTS</span><b>714,973</b></div><div><span>MESH TYPE</span><b>Tetrahedral</b></div></div>
          <div className="flow-diagram"><span>CAD ASSEMBLY</span><b>→</b><span>MESH</span><b>→</b><span>BOUNDARY</span><b>→</b><span>4 LOAD CASES</span><b>→</b><span>STRESS EVALUATION</span></div>
        </ProjectSection>

        <ProjectSection index="05" label="RESULTS" title="The axial-load combination governs mechanical stress."
          visual={<ImageViewer src={sitePath('/assets/projects/ball-valve/results.png')} alt="Comparison of four ball valve FEA load cases" caption="Unified comparison of LC1—LC4" />}>
          <p>LC3 的最大等效应力为 133.04 MPa，是机械载荷中的控制工况。阀体材料 ASTM A350 LF2 屈服强度取 250 MPa，对应保守安全系数约 1.88。</p>
          <div className="wide-table" role="region" aria-label="Scrollable ball valve result table" tabIndex={0}>
            <div className="result-ledger result-ledger-wide">
              <div><span>CASE</span><span>COMBINATION</span><span>INPUT</span><span>STRESS</span><span>DEFORMATION</span></div>
              {loadCases.map(([id, name, input, stress, deformation]) => <div className={id === 'LC3' ? 'highlight-row' : ''} key={id}><b>{id}</b><span>{name}</span><span>{input}</span><span>{stress}</span><span>{deformation}</span></div>)}
            </div>
          </div>
          <p className="table-note">* LC2 的 205.96 mm 主要反映整体温升下的热膨胀位移，不能直接等同于局部结构失效。</p>
        </ProjectSection>

        <ProjectSection index="06" label="OPTIMIZATION" title="The optimization target is the analysis model and evaluation path."
          visual={<ImageViewer src={sitePath('/assets/projects/ball-valve/load-cases.png')} alt="Ball valve load case definition and material assignment" caption="Four load cases under one evaluation framework" />}>
          <p>本项目不声称完成阀体轻量化几何优化。优化工作集中在计算模型：去除不影响全局传力的细节、保留危险区域、统一四类工况的评价口径，并用结果反向识别需要局部精细分析的位置。</p>
          <div className="region-grid">{regions.map(([title, body]) => <article key={title}><span>{title}</span><p>{body}</p></article>)}</div>
        </ProjectSection>

        <ProjectSection index="07" label="ENGINEERING CONCLUSION" title="Stress margin is acceptable, with clear limits on what the model proves."
          visual={<ImageViewer src={sitePath('/assets/projects/ball-valve/governing-case.png')} alt="Ball valve LC3 governing stress result and safety margin" caption="LC3 · pressure + 2.88 MN axial load" />} dark>
          <p>四类组合工况中，LC3 控制机械应力，最大等效应力低于 LF2 屈服强度。结果支持当前全局结构在所评估载荷下具有屈服裕度，但密封性能、焊缝细节和局部接触仍需更高保真模型或试验进一步确认。</p>
          <div className="conclusion-grid"><span><b>GLOBAL MODEL</b>Pressure-boundary screening</span><span><b>GOVERNING CASE</b>LC3 pressure + axial</span><span><b>NEXT DETAIL</b>Seal, weld and contact refinement</span></div>
          <a className="button button-light" href={sitePath('/ball-valve-engineering-portfolio.pdf')} target="_blank" rel="noreferrer">VIEW FULL PDF REPORT <b>↗</b></a>
        </ProjectSection>
      </div>

      <section className="next-project"><div className="shell"><span>PREVIOUS PROJECT</span><a href={sitePath('/projects/robot-bracket/')}>Robot Joint Bracket Optimization <b>↗</b></a></div></section>
      <SiteFooter />
    </main>
  );
}

