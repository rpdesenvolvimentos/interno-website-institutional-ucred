import {
  BuildingIcon,
  CalendarCheckIcon,
  CheckCheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  CreditCardIcon,
  PercentIcon,
  PhoneIcon,
  PlusIcon,
  RssIcon,
  UserCircle2Icon,
  UserIcon,
  WindIcon,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { cn } from '../@config/lib/cn'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Reveal } from '../components/reveal'
import { Button } from '../components/ui/button'

export function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  function setScroll() {
    if (window.scrollY > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  window.addEventListener('scroll', setScroll)

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <main className="min-h-screen w-full">
      <Helmet title="Início" />

      <Header />

      <section className="bg-primary bg-banner bg-cover bg-center bg-no-repeat py-12 lg:h-[calc(45rem-5rem)] lg:py-0">
        <div className="relative h-full">
          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: '.custom-pag-main',
            }}
            modules={[Pagination]}
            navigation={{
              nextEl: '.custom-next-main',
              prevEl: '.custom-prev-main',
            }}
            loop
            className="h-full"
          >
            <SwiperSlide className="w-full">
              <div className="container flex h-full w-full flex-col items-center gap-12 lg:flex-row">
                <div className="w-full flex-[1.2]">
                  <Reveal classes="hidden md:block">
                    <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl xl:text-6xl xl:leading-[4rem]">
                      Seu cliente paga <br /> parcelado, mas a sua empresa
                      recebe à vista
                    </h2>
                  </Reveal>

                  <Reveal classes="block md:hidden">
                    <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl xl:text-6xl xl:leading-[4rem]">
                      Seu cliente paga parcelado, mas a sua empresa recebe à
                      vista
                    </h2>
                  </Reveal>

                  <Reveal>
                    <p className="mt-4 text-lg text-zinc-200 md:text-xl lg:text-2xl">
                      Financiamento de procedimentos estéticos, produtos ou
                      serviços é na UCRED!
                    </p>
                  </Reveal>

                  <Reveal>
                    <Button
                      type="button"
                      title="Clique para saber mais"
                      onClick={() =>
                        window.scroll({
                          behavior: 'smooth',
                          top: 500,
                        })
                      }
                      className="text-md mt-6 rounded-xl bg-white px-8 py-6 text-primary transition-all hover:bg-gradient-to-r hover:from-secondary-1 hover:via-secondary-3 hover:to-secondary-4 hover:text-white"
                    >
                      <PlusIcon className="mr-2 size-4" />
                      Saiba mais
                    </Button>
                  </Reveal>
                </div>

                <div className="h-full w-full flex-[1.2] items-end lg:hidden xl:flex">
                  <img
                    src="/banner-hero.png"
                    className="h-full w-full object-contain object-bottom"
                    alt="Imagem de um homem no computador"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="w-full">
              <div className="container flex h-full w-full flex-col items-center gap-12 lg:flex-row">
                <div className="w-full flex-[1.2]">
                  <Reveal classes="hidden md:block">
                    <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-4xl xl:text-5xl xl:leading-[3.5rem]">
                      Crédito rápido e prático <br /> para realizar os projetos
                      que você sempre sonhou
                    </h2>
                  </Reveal>

                  <Reveal classes="block md:hidden">
                    <h2 className="block text-2xl font-bold tracking-tight text-white md:hidden md:text-4xl lg:text-5xl xl:text-6xl xl:leading-[4rem]">
                      Crédito rápido e prático para realizar os projetos que
                      você sempre sonhou
                    </h2>
                  </Reveal>

                  <Reveal>
                    <p className="mt-4 text-lg text-zinc-200 md:text-xl lg:text-2xl">
                      Conte com a gente para realizar seus maiores sonhos junto
                      com quem você ama.
                    </p>
                  </Reveal>

                  <Reveal>
                    <Button
                      type="button"
                      onClick={() =>
                        window.scroll({
                          behavior: 'smooth',
                          top: 500,
                        })
                      }
                      title="Clique para saber mais"
                      className="text-md mt-6 rounded-xl bg-white px-8 py-6 text-primary transition-all hover:hover:bg-gradient-to-r hover:from-secondary-1 hover:via-secondary-3 hover:to-secondary-4 hover:text-white"
                    >
                      <PlusIcon className="mr-2 size-4" />
                      Saiba mais
                    </Button>
                  </Reveal>
                </div>

                <div className="flex h-full w-full flex-[1.2] items-end">
                  <img
                    src="/banner-hero.png"
                    alt="Imagem de um homem no computador"
                    className="h-full w-full object-contain object-bottom"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <Reveal classes="w-full ">
            <div className="container relative mt-10 flex justify-center lg:-mt-20 lg:block">
              <div className="z-20 inline-flex items-center gap-4 lg:absolute lg:left-4 lg:top-0">
                <button className="custom-prev-main flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-white text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-primary">
                  <ChevronLeftIcon className="size-4" />
                </button>

                <div className={`custom-pag-main flex gap-2 rounded-full`} />

                <button className="custom-next-main flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-white text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-primary">
                  <ChevronRightIcon className="size-4" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="h-5 w-full bg-gradient-to-r from-secondary via-secondary-2 to-secondary-4" />

      <section className="container py-10">
        <div className="grid grid-cols-1 gap-14 rounded-2xl bg-primary bg-benefits bg-cover bg-center bg-no-repeat p-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-0">
          <Reveal>
            <div className="flex flex-col items-center space-y-4 text-white md:items-start">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary-lighter">
                <CreditCardIcon className="size-6" />
              </div>
              <h2 className="text-lg font-bold">Crédito de até R$8.000,00</h2>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col items-center space-y-4 text-white md:items-start">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary-lighter">
                <CalendarCheckIcon className="size-6" />
              </div>
              <h2 className="text-lg font-bold">Até 24x meses para pagar</h2>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col items-center space-y-4 text-white md:items-start">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary-lighter">
                <PercentIcon className="size-6" />
              </div>
              <h2 className="text-lg font-bold">Taxa de 3,99% A.M</h2>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col items-center space-y-4 text-white md:items-start">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary-lighter">
                <UserIcon className="size-6" />
              </div>
              <h2 className="text-lg font-bold">Área do cliente exclusiva</h2>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden rounded-tl-[3rem] border-y-2 border-zinc-200 bg-zinc-100 md:rounded-br-[4rem] md:rounded-tl-[4rem]">
        <div className="container flex flex-col gap-6 md:flex-row">
          <div className="flex w-full flex-[1.2] flex-col justify-center py-10">
            <Reveal>
              <span className="text-xl font-semibold text-primary lg:text-2xl">
                Soluções financeiras
              </span>
            </Reveal>
            <Reveal>
              <h2 className="mt-3 text-2xl font-extrabold text-zinc-600 lg:text-4xl xl:text-5xl">
                Na UCRED você pode <br /> confiar de olhos fechados
              </h2>
            </Reveal>

            <Reveal>
              <p className="mt-5 text-lg font-medium text-zinc-600">
                A UCRED Serviços Financeiros é uma correspondente bancária da
                GIROTECH que está atuando há 17 anos no mercado financeiro
                profissional.
                <br />
                <br />O nosso produto é o crédito pessoal, sem exigência de
                garantias, com taxas que variam em função do perfil de crédito
                de cada cliente.
              </p>
            </Reveal>
          </div>
          <div className="flex w-full flex-1 items-center justify-center bg-primary bg-about bg-cover bg-center bg-no-repeat pt-4 md:max-h-[29rem]">
            <img
              alt="Imagem uma mulher no telefone"
              src="/imagens/mulher-telefone.png"
              className="pointer-events-none h-full w-full select-none object-cover object-bottom"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container py-14">
          <div className="after:content=['*'] via-88% relative flex flex-col gap-1 from-secondary-1 via-secondary-2 via-50% to-secondary text-zinc-600 after:absolute after:h-full after:w-1 after:bg-gradient-to-b">
            <Reveal>
              <h2 className="pl-4 text-2xl font-bold md:pl-8 md:text-4xl">
                Agilidade e praticidade
              </h2>
            </Reveal>
            <Reveal>
              <p className="pl-4 text-sm font-medium md:pl-8 md:text-lg 2xl:text-lg">
                Confira algumas vantagens de ser UCRED
              </p>
            </Reveal>
          </div>

          <div className="mt-12">
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 2,
                },
                900: {
                  slidesPerView: 3,
                },
                1300: {
                  slidesPerView: 4,
                },
              }}
              pagination={{
                clickable: true,
                el: '.custom-pag-advantages',
              }}
              modules={[Pagination, Autoplay]}
              autoplay={{
                delay: 7000,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                nextEl: '.custom-next-advantages',
                prevEl: '.custom-prev-advantages',
              }}
              loop
            >
              <SwiperSlide className="rounded-xl border-2 border-[#DDDDDD] bg-[#F8F8F8] text-primary">
                <Reveal>
                  <div className="flex flex-col items-start gap-2 px-5 py-10">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary-lighter text-white">
                      <RssIcon className="size-6" />
                    </div>

                    <p className="text-xl font-bold text-zinc-600/80">
                      Aprovação on-line <br /> do seu crédito
                    </p>
                  </div>
                </Reveal>
              </SwiperSlide>

              <SwiperSlide className="rounded-xl border-2 border-[#DDDDDD] bg-[#F8F8F8] text-primary">
                <Reveal>
                  <div className="flex flex-col items-start gap-2 px-5 py-10">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary-lighter text-white">
                      <PhoneIcon className="size-6" />
                    </div>

                    <p className="text-xl font-bold text-zinc-600/80">
                      Atendimento ao <br /> lojista credenciado
                    </p>
                  </div>
                </Reveal>
              </SwiperSlide>

              <SwiperSlide className="rounded-xl border-2 border-[#DDDDDD] bg-[#F8F8F8] text-primary">
                <Reveal>
                  <div className="flex flex-col items-start gap-2 px-5 py-10">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary-lighter text-white">
                      <ClockIcon className="size-6" />
                    </div>

                    <p className="text-xl font-bold text-zinc-600/80">
                      Aprovação em até <br /> 10 minutos pela mesa
                    </p>
                  </div>
                </Reveal>
              </SwiperSlide>

              <SwiperSlide className="rounded-xl border-2 border-[#DDDDDD] bg-[#F8F8F8] text-primary">
                <Reveal>
                  <div className="flex flex-col items-start gap-2 px-5 py-10">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary-lighter text-white">
                      <CheckCheckIcon className="size-6" />
                    </div>

                    <p className="text-xl font-bold text-zinc-600/80">
                      Pré análise para <br /> aprovação de crédito
                    </p>
                  </div>
                </Reveal>
              </SwiperSlide>

              <SwiperSlide className="rounded-xl border-2 border-[#DDDDDD] bg-[#F8F8F8] text-primary">
                <Reveal>
                  <div className="flex flex-col items-start gap-2 px-5 py-10">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary-lighter text-white">
                      <CalendarCheckIcon className="size-6" />
                    </div>

                    <p className="text-xl font-bold text-zinc-600/80">
                      Carnê digital <br /> personalizado
                    </p>
                  </div>
                </Reveal>
              </SwiperSlide>

              <SwiperSlide className="rounded-xl border-2 border-[#DDDDDD] bg-[#F8F8F8] text-primary">
                <Reveal>
                  <div className="flex flex-col items-start gap-2 px-5 py-10">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary-lighter text-white">
                      <UserIcon className="size-6" />
                    </div>

                    <p className="text-xl font-bold text-zinc-600/80">
                      Empréstimo pessoal <br /> sem garantia real
                    </p>
                  </div>
                </Reveal>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between md:flex-row">
            <Reveal>
              <div className="z-20 inline-flex items-center gap-4">
                <button className="custom-prev-advantages flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-primary text-primary transition-all duration-500 ease-in-out hover:bg-white hover:text-primary">
                  <ChevronLeftIcon className="size-4" />
                </button>

                <div
                  className={`custom-pag-advantages flex gap-2 rounded-full`}
                />

                <button className="custom-next-advantages flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-primary text-primary transition-all duration-500 ease-in-out hover:bg-white hover:text-primary">
                  <ChevronRightIcon className="size-4" />
                </button>
              </div>
            </Reveal>

            <Reveal>
              <Link
                to="https://api.whatsapp.com/send?phone=554131954559&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
                target="_blank"
                className={cn(
                  'text-md mt-5 flex items-center rounded-xl bg-white px-8 py-3 text-primary transition-all hover:hover:bg-gradient-to-r hover:from-secondary-1 hover:via-secondary-3 hover:to-secondary-4 hover:text-white md:mt-0',
                  isScrolled && 'bg-primary text-white',
                )}
                title="Clique para entrar em contato conosco"
              >
                <PhoneIcon className="mr-2 size-4" />
                Comece agora
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="rounded-bl-[3rem] rounded-tl-[3rem] bg-primary 2xl:rounded-bl-[30rem] 2xl:rounded-tl-[30rem]">
        <div className="container py-28">
          <div className="after:content=['*'] via-88% relative flex flex-col gap-1 from-secondary-1 via-secondary-2 via-50% to-secondary text-white after:absolute after:h-full after:w-1 after:bg-gradient-to-b">
            <Reveal>
              <h2 className="pl-4 text-2xl font-bold md:pl-8 md:text-4xl">
                Perfeito para <br /> vários segmentos
              </h2>
            </Reveal>
            <Reveal>
              <p className="pl-4 text-sm font-medium md:pl-8 md:text-lg 2xl:text-lg">
                Confira alguns segmentos que a UCRED trabalha
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
            <Reveal>
              <div className="flex items-start gap-5">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-primary-lighter text-white">
                  <BuildingIcon className="size-9" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    Para empresas
                  </h2>
                  <p className="text-md mt-1 font-medium text-zinc-100">
                    O serviço de crédito que a Ucred disponibiliza não se
                    restringe apenas a companhias de saúde e estética.
                  </p>

                  <Link
                    to="/credito-para-empresa"
                    title="Clique para saber mais"
                    className="text-md mt-5 inline-flex items-center rounded-xl bg-primary-lighter px-8 py-3 text-white transition-all hover:brightness-90"
                  >
                    <PlusIcon className="mr-2 size-4" />
                    Saiba mais
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex items-start gap-5">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-primary-lighter text-white">
                  <WindIcon className="size-9" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    Para estéticas
                  </h2>
                  <p className="text-md mt-1 font-medium text-zinc-100">
                    Agora as empresas de estética, beleza, saúde e bem-estar
                    podem contar com um sistema de crédito personalizado.
                  </p>

                  <Link
                    to="/credito-para-estetica"
                    title="Clique para saber mais"
                    className="text-md mt-5 inline-flex items-center rounded-xl bg-primary-lighter px-8 py-3 text-white transition-all hover:brightness-90"
                  >
                    <PlusIcon className="mr-2 size-4" />
                    Saiba mais
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex items-start gap-5">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-primary-lighter text-white">
                  <UserCircle2Icon className="size-9" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    Empréstimo pessoal
                  </h2>
                  <p className="text-md mt-1 font-medium text-zinc-100">
                    Além da pessoa jurídica, a pessoa física também tem direito
                    a utilizar o sistema de crédito personalizado da Ucred.
                  </p>

                  <Link
                    to="/emprestimo-pessoal"
                    title="Clique para saber mais"
                    className="text-md mt-5 inline-flex items-center rounded-xl bg-primary-lighter px-8 py-3 text-white transition-all hover:brightness-90"
                  >
                    <PlusIcon className="mr-2 size-4" />
                    Saiba mais
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
