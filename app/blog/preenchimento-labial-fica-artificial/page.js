export const metadata = {
  title: 'Preenchimento labial fica artificial? | Dra. Beatriz Lazari',
  description:
    'Dra. Beatriz Lazari responde se o preenchimento labial fica artificial e explica como alcançar resultados naturais em Bauru.',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-[#f7f3ef] px-6 py-20 text-zinc-800 lg:px-20">
      <article className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Dra. Beatriz Lazari responde
        </p>

        <h1 className="mb-8 text-5xl font-light leading-tight lg:text-7xl">
          Preenchimento labial fica artificial?
        </h1>

        <p className="mb-10 text-lg leading-relaxed text-zinc-600">
          Essa é uma pergunta que recebo frequentemente no meu consultório em Bauru — e
          percebo que muitas pacientes carregam esse receio quando pensam em
          realizar o preenchimento labial.
        </p>

        <div className="mb-12 overflow-hidden rounded-[36px] bg-white shadow-xl">
          <img
            src="/images/antes-depois/labiobauru.jpeg"
            alt="Antes e depois de preenchimento labial em Bauru"
            className="h-[620px] w-full object-cover"
          />
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-zinc-700">
          <p>
            E a resposta é: <strong>não</strong>.
          </p>

          <p>
            O preenchimento labial não fica artificial quando é realizado com
            planejamento, técnica adequada e respeito à individualidade de cada
            paciente.
          </p>

          <p>
            Quando falamos sobre preenchimento labial, é fundamental considerar
            diversos aspectos, como anatomia e formato natural dos lábios,
            características fisiológicas, idade da paciente, força muscular da
            região, escolha do produto ideal e, principalmente, a técnica
            utilizada.
          </p>

          <p>
            Cada rosto possui proporções únicas — e, por isso, cada resultado
            também deve ser único.
          </p>

          <p>
            A harmonização labial não deve transformar completamente uma pessoa,
            mas sim valorizar sua beleza natural com equilíbrio, sofisticação e
            naturalidade.
          </p>

          <p>
            Por isso, é tão importante escolher um profissional que una saúde,
            conhecimento anatômico e senso estético para realizar o procedimento
            com segurança.
          </p>

          <p>
            Além disso, é importante lembrar que muitas imagens divulgadas na
            internet podem gerar interpretações equivocadas sobre o
            preenchimento labial.
          </p>

          <p>
            Em alguns casos, fotos com grande edema labial estão relacionadas à
            aplicação de hialuronidase — enzima utilizada para remover o ácido
            hialurônico — e não necessariamente ao resultado final de um
            preenchimento.
          </p>

          <p>
            Esse inchaço costuma ser temporário, esperado e acompanhado pelo
            profissional responsável durante todo o processo de reversão.
          </p>

          <p>
            Por isso, é fundamental buscar informações de fontes confiáveis e
            compreender que cada etapa de um tratamento possui indicações,
            cuidados e evoluções específicas.
          </p>

          <p>
            O objetivo nunca deve ser exagerar, e sim embelezar.
          </p>
        </div>

        <div className="mt-14 rounded-[32px] bg-zinc-900 p-8 text-center text-white">
          <h2 className="mb-4 text-3xl font-light">
            Quer entender se o preenchimento labial é indicado para você?
          </h2>

          <a
            href="https://wa.me/5514988225076?text=Ol%C3%A1%20Dra.%20Beatriz%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-zinc-900"
          >
            Agendar avaliação
          </a>
        </div>
      </article>
    </main>
  )
}