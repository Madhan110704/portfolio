import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PROJECTS } from '@/data/projects';
import { ArrowLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';
import StickyNav from '@/components/project/StickyNav';
import PcbLayerExplorer from '@/components/project/PcbLayerExplorer';
import ProjectGallery from '@/components/project/ProjectGallery';
import AntennaCaseStudy from '@/components/project/AntennaCaseStudy';

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  // Find previous and next projects for footer navigation
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;

  return (
    <main className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30">
      {/* 1. Header & Back Button */}
      <div className="container-portfolio py-8 relative z-10">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-cyan-500 font-mono text-xs tracking-wider hover:text-cyan-400 transition-colors mb-12 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          BACK TO ENGINEERING WORK
        </Link>

        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-cyan-500 opacity-80">PROJECT {project.number} / 05</span>
            <div className="w-1 h-1 rounded-full bg-slate-600" />
            <span className="font-mono text-xs tracking-widest text-slate-400 uppercase">
              {project.domain.join(' • ')}
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            {project.title}
          </h1>

          <p className="text-xl text-slate-400 mb-10 max-w-3xl leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.specs.map((spec) => (
              <div
                key={spec.label}
                className="flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900 border border-slate-800"
              >
                <span className="font-mono text-[0.65rem] text-slate-500 uppercase">{spec.label}</span>
                <span className="font-mono text-[0.75rem] text-cyan-400">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Hero Image */}
      <div className="container-portfolio mb-16 relative z-10">
        <div className="w-full aspect-[2/1] bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center overflow-hidden relative group p-2 sm:p-4">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/20 to-transparent pointer-events-none" />
          {project.media.hero ? (
            <img 
              src={project.media.hero} 
              alt={`${project.title} Hero`} 
              className="w-full h-full object-contain relative z-10" 
            />
          ) : (
            <div className="text-center z-10">
              <span className="font-mono text-cyan-500/50 text-sm tracking-widest px-6 py-3 border border-cyan-500/20 rounded bg-slate-950/50 backdrop-blur-sm">
                [ACTUAL {project.title.toUpperCase()} HERO IMAGE — TO BE ADDED]
              </span>
            </div>
          )}
        </div>
        {project.media?.hero && (
          <p className="font-mono text-xs text-slate-500 text-center tracking-wide">
            {project.id === 'uwb-antenna'
              ? 'Exploded 3D view showing the 4×4 CSRR metasurface, stacked rectangular patch layer with RSRR loading, substrates, dumbbell DGS, and keyhole feed.'
              : project.id === 'stm32f103'
              ? '3D visualization of the STM32F103C8T6 development board.'
              : project.id === 'power-converter'
              ? '3D visualization of the power converter PCB design in Altium Designer.'
              : project.id === 'approx-adder'
              ? 'Figure 13: Approximate adder architecture and power analysis.'
              : `${project.title} primary visual.`}
          </p>
        )}
      </div>

      {/* 3. Sticky Navigation */}
      <StickyNav project={project} />

      {/* 4. Case Study Content */}
      {project.id === 'uwb-antenna' ? (
        <AntennaCaseStudy project={project} />
      ) : (
        <>
          <div className="container-portfolio max-w-5xl py-16">
            
            {/* OVERVIEW */}
            <section id="overview" className="scroll-mt-32 mb-20">
          <SectionHeader number="01" title="OVERVIEW" />
          <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
            <div className="md:col-span-2">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed sm:leading-loose mb-6">
                {project.caseStudy.overview}
              </p>
            </div>
            <div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 shadow-lg">
                <h4 className="font-display font-semibold text-white mb-4 tracking-wide">Specifications</h4>
                <div className="space-y-3">
                  {project.specs.map(spec => (
                    <div key={spec.label} className="flex flex-col border-b border-slate-800/50 pb-2 last:border-0 last:pb-0">
                      <span className="font-mono text-[0.65rem] text-slate-500 uppercase tracking-wider">{spec.label}</span>
                      <span className="text-sm text-slate-300 font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OBJECTIVE */}
        <section id="objective" className="scroll-mt-32 mb-20">
          <SectionHeader number="02" title="OBJECTIVE" />
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed sm:leading-loose max-w-3xl">
            {project.caseStudy.objective}
          </p>
        </section>

        {/* ARCHITECTURE */}
        {project.caseStudy.architecture && (
          <section id="architecture" className="scroll-mt-32 mb-20">
            <SectionHeader number="03" title="SYSTEM ARCHITECTURE" />
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
              {project.caseStudy.architecture}
            </p>
            <div className="w-full aspect-[16/10] sm:aspect-[3/2] bg-slate-950 border border-slate-800 rounded-xl flex flex-col items-center justify-center overflow-hidden mb-4 p-3 sm:p-6 shadow-xl">
              {project.media?.architecture ? (
                <img 
                  src={project.media.architecture} 
                  alt={project.id === 'stm32f103' ? "System architecture of the STM32F103C8T6 development board" : `System architecture of ${project.title}`} 
                  className="w-full h-full object-contain rounded-lg" 
                />
              ) : (
                <div className="flex items-center justify-center min-h-[300px]">
                  <span className="font-mono text-slate-500 tracking-widest text-sm">
                    [ARCHITECTURE DIAGRAM — TO BE ADDED]
                  </span>
                </div>
              )}
            </div>
            {project.media?.architecture && (
              <p className="font-mono text-xs text-slate-500 text-center tracking-wide mt-2">
                {project.id === 'stm32f103'
                  ? 'System architecture of the STM32F103C8T6 development board.'
                  : project.id === 'approx-adder'
                  ? 'Figure 13: Approximate adder architecture and power analysis.'
                  : 'System architecture showing MCU, power, RF, clock, and debug interfaces.'}
              </p>
            )}
          </section>
        )}

        {/* DESIGN APPROACH */}
        {project.caseStudy.designApproach && (
          <section id="design-approach" className="scroll-mt-32 mb-20">
            <SectionHeader number="04" title="DESIGN APPROACH" />
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed sm:leading-loose max-w-3xl">
              {project.caseStudy.designApproach}
            </p>
          </section>
        )}

        {/* SCHEMATIC */}
        {project.caseStudy.schematicDesc && (
          <section id="schematic" className="scroll-mt-32 mb-20">
            <SectionHeader number="04" title="SCHEMATIC" />
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
              {project.caseStudy.schematicDesc}
            </p>
            <div className="w-full aspect-[16/9] sm:aspect-[1.85/1] bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center overflow-hidden mb-4 p-3 sm:p-6 shadow-xl">
              {project.media.schematic ? (
                <img src={project.media.schematic} alt="Schematic" className="w-full h-full object-contain rounded-lg" />
              ) : (
                <span className="font-mono text-cyan-500/50 text-sm tracking-widest px-6 py-3 border border-cyan-500/20 rounded bg-slate-950/50">
                  [ACTUAL SCHEMATIC — TO BE ADDED]
                </span>
              )}
            </div>
            <p className="font-mono text-xs text-slate-500 text-center tracking-wide mt-2">
              {project.id === 'stm32f103'
                ? 'STM32F103C8T6 schematic showing power, clock, programming, and peripheral interfaces.'
                : project.id === 'power-converter'
                ? 'Figure 15: Power converter schematic design in Altium Designer.'
                : project.id === 'approx-adder'
                ? 'Figure 14: Circuit schematic of the hybrid approximate adder design.'
                : 'STM32WB55CEU6 schematic showing power, USB-C, clock, SWD and RF connectivity.'}
            </p>
          </section>
        )}

        {/* PCB DESIGN & STACKUP */}
        {project.caseStudy.pcbDesignDesc && (
          <section id="pcb-design" className="scroll-mt-32 mb-20">
            <SectionHeader 
              number="05" 
              title={project.id === 'stm32f103' ? "PCB LAYOUT & 2-LAYER STACKUP" : "PCB LAYOUT & 4-LAYER STACKUP"} 
            />
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
              {project.caseStudy.pcbDesignDesc}
            </p>
            
            {/* Complete PCB Layout */}
            <div className="mb-14">
              <div className="w-full aspect-[16/9] sm:aspect-[1.85/1] bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center overflow-hidden mb-4 p-3 sm:p-6 shadow-xl">
                {project.media.pcbTop ? (
                  <img src={project.media.pcbTop} alt="Complete PCB Layout" className="w-full h-full object-contain" />
                ) : (
                  <span className="font-mono text-cyan-500/50 text-xs tracking-widest px-4 py-2 border border-cyan-500/20 rounded bg-slate-950/50">
                    [ACTUAL PCB LAYOUT — TO BE ADDED]
                  </span>
                )}
              </div>
              <p className="font-mono text-xs text-slate-500 text-center tracking-wide mt-2">
                {project.id === 'stm32f103'
                  ? 'Complete PCB layout showing component placement and routing.'
                  : project.id === 'power-converter'
                  ? 'PCB layout of the power converter design.'
                  : 'Complete PCB layout showing component placement and multi-layer routing.'}
              </p>
            </div>

            {/* Stackup Explorer */}
            {project.caseStudy.layerStructureDesc && (
              <div className="mt-10">
                <h4 className="font-display text-xl font-semibold text-white mb-3">
                  {project.id === 'stm32f103' ? '2-Layer Stackup Explorer' : '4-Layer Stackup Explorer'}
                </h4>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl">
                  {project.caseStudy.layerStructureDesc}
                </p>
                <PcbLayerExplorer media={project.media} />
                <p className="font-mono text-xs text-slate-500 text-center tracking-wide mt-4">
                  {project.id === 'stm32f103'
                    ? '2-layer PCB stackup showing the top and bottom copper layers.'
                    : '4-layer PCB stackup: L1 Signal, L2 Ground, L3 Ground, L4 Signal.'}
                </p>
              </div>
            )}
          </section>
        )}

        {/* RF DESIGN (conditional for other projects only) */}
        {project.caseStudy.rfDesignDesc && (
          <section id="rf-design" className="scroll-mt-32 mb-20">
            <SectionHeader number="06" title="RF DESIGN" />
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6">{project.caseStudy.rfDesignDesc}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-[4/3] bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center overflow-hidden">
                {project.media.rfSection ? (
                  <img src={project.media.rfSection} alt="RF Section" className="w-full h-full object-cover" />
                ) : (
                  <span className="font-mono text-orange-500/50 text-xs tracking-widest px-4 py-2 border border-orange-500/20 rounded bg-slate-950/50">
                    [RF SECTION IMAGE — TO BE ADDED]
                  </span>
                )}
              </div>
              <div className="aspect-[4/3] bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center overflow-hidden">
                {project.media.rfMatching ? (
                  <img src={project.media.rfMatching} alt="RF Matching Network" className="w-full h-full object-cover" />
                ) : (
                  <span className="font-mono text-orange-500/50 text-xs tracking-widest px-4 py-2 border border-orange-500/20 rounded bg-slate-950/50">
                    [RF MATCHING NETWORK IMAGE — TO BE ADDED]
                  </span>
                )}
              </div>
            </div>
          </section>
        )}

        {/* VERIFICATION & RESULTS (conditional for other projects only) */}
        {(project.caseStudy.verificationDesc || project.caseStudy.resultsDesc) && (
          <section id="verification" className="scroll-mt-32 mb-20">
            <SectionHeader number="07" title="VERIFICATION & RESULTS" />
            
            {project.caseStudy.verificationDesc && (
              <div className="mb-10">
                <h4 className="font-display text-xl font-semibold text-white mb-3">Verification Workflow</h4>
                <p className="text-slate-400 leading-relaxed mb-6">{project.caseStudy.verificationDesc}</p>
                <div className="grid grid-cols-3 gap-4">
                  {['ERC RESULT', 'DRC RESULT', '3D REVIEW'].map((item) => (
                    <div key={item} className="aspect-square bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center p-4 text-center">
                      <span className="font-mono text-slate-500/50 text-[0.6rem] sm:text-xs tracking-widest">
                        [{item} — TO BE ADDED]
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.caseStudy.resultsDesc && (
              <div>
                <h4 className="font-display text-xl font-semibold text-white mb-3">Design Outputs & Results</h4>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed border-l-2 border-cyan-500 pl-6">
                  {project.caseStudy.resultsDesc}
                </p>
              </div>
            )}
          </section>
        )}

      </div>

      {/* 3D VISUALIZATION (Full Width) */}
      {project.media && (
        <section id="3d-visualization" className="scroll-mt-32 mb-24 bg-slate-900 py-16 border-y border-slate-800">
          <div className="container-portfolio max-w-5xl">
            <SectionHeader number="07" title="3D VISUALIZATION" />
            <div className="w-full aspect-[2/1] bg-slate-950 border border-slate-800/50 rounded-xl flex items-center justify-center overflow-hidden mt-8 shadow-2xl p-2 sm:p-6 mb-4">
              {project.media.renderFront ? (
                <img src={project.media.renderFront} alt="3D Render" className="w-full h-full object-contain" />
              ) : (
                <span className="font-mono text-cyan-500/50 text-sm tracking-widest px-6 py-3 border border-cyan-500/20 rounded bg-slate-950/50">
                  [ACTUAL {project.title.toUpperCase()} 3D RENDER — TO BE ADDED]
                </span>
              )}
            </div>
            {project.media.renderFront && (
              <p className="font-mono text-xs text-slate-500 text-center tracking-wide mt-2">
                {project.id === 'stm32f103'
                  ? '3D visualization of the STM32F103C8T6 development board.'
                  : `3D model visualization of ${project.title}.`}
              </p>
            )}
          </div>
        </section>
      )}

      <div className="container-portfolio max-w-5xl pb-24">
        {/* GALLERY */}
        <section id="gallery" className="scroll-mt-32 mb-24">
          <SectionHeader number="09" title="PROJECT GALLERY" />
          <ProjectGallery media={project.media} />
        </section>

        {/* TOOLS & TAKEAWAYS */}
        <section id="tools" className="scroll-mt-32 mb-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionHeader number="10" title="TOOLS & TECHNOLOGIES" />
              <div className="flex flex-wrap gap-2">
                {project.caseStudy.tools.map((tool) => (
                  <span key={tool} className="tech-tag border-slate-700 bg-slate-800/50 text-slate-300 px-3 py-1.5 text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            {project.caseStudy.takeaways && (
              <div>
                <SectionHeader number="11" title="ENGINEERING TAKEAWAYS" />
                <ul className="space-y-3">
                  {project.caseStudy.takeaways.map((takeaway) => (
                    <li key={takeaway} className="flex items-start gap-3 text-slate-300">
                      <ChevronRight size={18} className="text-cyan-500 mt-1 flex-shrink-0" />
                      <span className="leading-relaxed">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* GITHUB */}
        {project.caseStudy.githubUrl && (
          <section className="mb-24 flex justify-center">
            <a
              href={project.caseStudy.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-3 !px-8 !py-4"
            >
              <GithubIcon size={20} />
              <span className="font-display font-semibold tracking-wide">VIEW SOURCE / PROJECT REPOSITORY</span>
              <ExternalLink size={16} className="text-slate-500" />
            </a>
          </section>
        )}
      </div>
      </>
      )}

      {/* 5. Previous / Next Footer Navigation */}
      <div className="border-t border-slate-800 bg-slate-900/30">
        <div className="container-portfolio max-w-5xl">
          <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            {prevProject ? (
              <Link href={`/projects/${prevProject.id}`} className="flex-1 py-12 px-6 sm:px-12 group hover:bg-slate-900/50 transition-colors">
                <span className="font-mono text-xs text-slate-500 tracking-widest mb-2 block">← PREVIOUS PROJECT</span>
                <span className="font-display text-xl sm:text-2xl font-bold text-slate-300 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {prevProject.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1 py-12 px-6 sm:px-12 opacity-50 pointer-events-none"></div>
            )}

            {nextProject ? (
              <Link href={`/projects/${nextProject.id}`} className="flex-1 py-12 px-6 sm:px-12 text-right group hover:bg-slate-900/50 transition-colors">
                <span className="font-mono text-xs text-slate-500 tracking-widest mb-2 block">NEXT PROJECT →</span>
                <span className="font-display text-xl sm:text-2xl font-bold text-slate-300 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {nextProject.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1 py-12 px-6 sm:px-12 opacity-50 pointer-events-none"></div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="font-mono text-cyan-500 opacity-80">{number}</span>
      <h3 className="font-display text-2xl font-bold text-white tracking-wide">{title}</h3>
      <div className="h-px bg-slate-800 flex-1 ml-4" />
    </div>
  );
}
