const services = [
  { title: 'Preenchimento Labial', description: 'Lábios mais harmônicos, hidratados e proporcionais, sem exageros.' },
  { title: 'Rinomodelação', description: 'Correção estratégica do perfil nasal sem cirurgia, com naturalidade.' },
  { title: 'Perfiloplastia', description: 'Equilíbrio entre nariz, lábios e queixo para um perfil mais elegante.' },
  { title: 'Full Face', description: 'Planejamento global da face com foco em rejuvenescimento e harmonização.' },
]

const beforeAfter = [
    { image: '/images/antes-depois/bigode-chines.jpeg', title: 'Bigode Chinês' },
    { image: '/images/antes-depois/botox-2.jpeg', title: 'Botox' },
    { image: '/images/antes-depois/full-face-2.jpeg', title: 'Full Face' },
    { image: '/images/antes-depois/full-face-3.jpeg', title: 'Full Face' },
    { image: '/images/antes-depois/full-face.jpeg', title: 'Full Face' },
    { image: '/images/antes-depois/labio-2.jpeg', title: 'Preenchimento Labial' },
    { image: '/images/antes-depois/labio-3.jpeg', title: 'Preenchimento Labial' },
    { image: '/images/antes-depois/labio-4.jpeg', title: 'Preenchimento Labial' },
    { image: '/images/antes-depois/labio.jpeg', title: 'Preenchimento Labial' },
    { image: '/images/antes-depois/mandibula-2.jpeg', title: 'Mandíbula' },
    { image: '/images/antes-depois/mandibula.jpeg', title: 'Mandíbula' },
    { image: '/images/antes-depois/olheiras-2.jpeg', title: 'Olheiras' },
    { image: '/images/antes-depois/olheiras.jpeg', title: 'Olheiras' },
    { image: '/images/antes-depois/perfiloplastia-2.jpeg', title: 'Perfiloplastia' },
    { image: '/images/antes-depois/perfiloplastia.jpeg', title: 'Perfiloplastia' },
    { image: '/images/antes-depois/queixo-2.jpeg', title: 'Queixo' },
    { image: '/images/antes-depois/queixo-3.jpeg', title: 'Queixo' },
    { image: '/images/antes-depois/queixo.jpeg', title: 'Queixo' },
    { image: '/images/antes-depois/rinomodelaco-2.jpeg', title: 'Rinomodelação' },
    { image: '/images/antes-depois/rinomodelaco-3.jpeg', title: 'Rinomodelação' },
    { image: '/images/antes-depois/rinomodelaco-4.jpeg', title: 'Rinomodelação' },
    { image: '/images/antes-depois/rinomodelaco-5.jpeg', title: 'Rinomodelação' },
    { image: '/images/antes-depois/rinomodelaco-6-2.jpeg', title: 'Rinomodelação' },
    { image: '/images/antes-depois/rinomodelaco-6.jpeg', title: 'Rinomodelação' },
    { image: '/images/antes-depois/rinomodelaco.jpeg', title: 'Rinomodelação' }
]

const whatsapp = 'https://wa.me/5514988225076?text=Ol%C3%A1%20Dra.%20Beatriz%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ef] text-zinc-800 font-sans">
      <section className="relative overflow-hidden px-6 py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">Harmonização Facial em Bauru</p>
            <h1 className="mb-6 text-6xl font-light leading-none tracking-tight lg:text-8xl">
              Dra. Beatriz Lazari
              <span className="mt-4 block text-3xl font-medium italic leading-tight lg:text-5xl">Harmonização facial com naturalidade, sofisticação e identidade.</span>
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-zinc-600">
              Transformo autoestima através da harmonização facial, com planejamento individualizado e resultados naturais.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-[#bfa38a] px-8 py-4 text-sm font-semibold text-white transition hover:scale-[1.03] hover:shadow-2xl">Agendar avaliação</a>
              <a href="#servicos" className="rounded-2xl border border-zinc-300 px-7 py-4 text-sm font-medium transition hover:bg-white">Ver procedimentos</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[40px] bg-zinc-200 shadow-2xl ring-1 ring-black/5">
              <img src="/images/hero/dra-beatriz.jpeg" alt="Dra Beatriz Lazari" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">Sobre mim</p>
            <h2 className="mb-6 text-4xl font-light">Muito além da estética: autoestima, confiança e identidade.</h2>
          </div>
          <div>
            <p className="mb-5 text-lg leading-relaxed text-zinc-600">Sou cirurgiã-dentista formada pela UNESP de Araçatuba, com vasta experiência em análise facial, embelezamento e gerenciamento do envelhecimento.</p>
            <p className="mb-5 text-lg leading-relaxed text-zinc-600">Sempre fui admiradora da odontologia e do poder de transformação da autoestima.</p>
            <p className="text-lg leading-relaxed text-zinc-600">Utilizo ácido hialurônico, toxina botulínica e bioestimuladores de colágeno como ferramentas para resultados sofisticados e naturais.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#fcfaf8] px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">Abordagem personalizada</p>
            <h2 className="text-4xl font-light">Recursos utilizados para realçar sua beleza natural</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ['Toxina Botulínica', 'Utilizada para suavizar linhas de expressão, prevenir marcas do envelhecimento e proporcionar uma aparência mais leve, descansada e elegante.'],
              ['Ácido Hialurônico', 'Ferramenta essencial para devolver volume, contorno e equilíbrio facial, sempre respeitando a naturalidade e a identidade de cada paciente.'],
              ['Bioestimuladores de Colágeno', 'Estimulam a produção natural de colágeno, promovendo firmeza, melhora da qualidade da pele e rejuvenescimento progressivo.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[30px] border border-zinc-100 bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-2xl font-medium">{title}</h3><p className="leading-relaxed text-zinc-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos" className="px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">Procedimentos</p>
            <h2 className="text-4xl font-light">Tratamentos mais procurados</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="rounded-[30px] border border-zinc-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <h3 className="mb-4 text-2xl font-medium">{service.title}</h3><p className="leading-relaxed text-zinc-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center"><p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">Antes e depois</p><h2 className="text-4xl font-light">Resultados reais, autoestima transformada.</h2></div>
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4">
            {beforeAfter.map((item, index) => (
              <div key={index} className="min-w-[320px] md:min-w-[420px] snap-center overflow-hidden rounded-[32px] bg-white shadow-sm">
                <img src={item.image} 
                alt={item.title} 
                loading="lazy" 
                className="h-[680px] w-full object-cover"
               />
                <div className="p-4 text-center text-sm text-zinc-500">{item.title} • Resultado real</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-[40px] bg-zinc-900 px-10 py-16 text-center text-white shadow-2xl">
          <h2 className="mb-6 text-4xl font-light leading-tight">Sua melhor versão,<span className="block italic">com naturalidade e sofisticação.</span></h2>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-zinc-900 transition hover:scale-[1.02]">Falar no WhatsApp</a>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-[40px] border border-[#eadfd4] bg-[#fcfaf8] p-10 shadow-sm">
          <div className="mb-10 text-center"><p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">Avaliações</p><h2 className="text-4xl font-light">Experiências reais de pacientes.</h2></div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              '“Tive uma experiência incrível com a Dra. Beatriz! Sempre muito querida e cuidadosa em cada detalhe.”',
              '“Realizei o preenchimento com a Dra. Beatriz e me surpreendi com o profissionalismo e a excelência.”',
              '“Realizei preenchimento labial e rinomodelação com a Dra. Beatriz e amei muito.”',
            ].map((review, index) => (
              <div key={index} className="rounded-3xl bg-white p-8 shadow-sm"><div className="mb-4 text-xl text-[#bfa38a]">★★★★★</div><p className="leading-relaxed text-zinc-600">{review}</p></div>
            ))}
          </div>
        </div>

      </section>

      <section className="px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 shadow-sm">
          <h2 className="mb-6 text-4xl font-light">Atendimento no Prime Square • Bauru</h2>
          <p className="mb-6 text-lg leading-relaxed text-zinc-600">Av. Getúlio Vargas, 22-25 - Jardim Europa, Bauru - SP, 17017-383</p>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-2xl bg-[#bfa38a] px-8 py-4 text-sm font-semibold text-white">Agendar avaliação</a>
        </div>
      </section>

      <footer className="border-t border-zinc-200 px-6 py-10 lg:px-20">
  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-sm text-zinc-500 lg:flex-row">
    <p>© 2026 Dra. Beatriz Lazari • Harmonização Facial</p>

    <div className="flex gap-6">
      <a
        href="https://www.instagram.com/drabeatrizlazari"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-zinc-900"
      >
        Instagram
      </a>

      <a
        href="https://share.google/tXY7jNfoGWhXoPS8Z"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-zinc-900"
      >
        Google
      </a>

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-zinc-900"
      >
        WhatsApp
      </a>
    </div>
  </div>
</footer>

<a
  href={whatsapp}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Falar no WhatsApp"
  className="fixed bottom-6 right-6 rounded-full bg-green-500 px-5 py-4 text-white shadow-2xl transition hover:scale-105"
>
  WhatsApp
</a>
</main>
 )
}