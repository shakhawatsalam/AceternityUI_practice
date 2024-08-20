import { Container, Icons, Wrapper } from "@/components";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/ui/section-badge";
import { features, perks, pricingCards } from "@/constants";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const HomePage = () => {
  return (
    <section className='w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8'>
      {/* Hero  */}
      <Wrapper>
        <Container>
          <div className='flex flex-col items-center justify-center py-20 w-full'>
            <button className='group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200'>
              <span>
                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className='backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900' />
              <span className='h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40'></span>
              <span className='z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5'>
                <Image
                  src='/icons/sparkles-dark.svg'
                  alt='✨'
                  width={24}
                  height={24}
                  className='w-4 h-4'
                />
                Introducing Astra AI
                <ChevronRight className='w-4 h-4' />
              </span>
            </button>
            <div className='flex flex-col items-center mt-8 max-w-3xl mx-auto w-11/12 md:w-full'>
              <h1 className='text-4xl md:text-6xl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-100 text-transparent'>
                Build your next idea and ship your dream site
              </h1>
              <p className='text-base md:text-lg text-foreground/80 mt-6 text-center'>
                Zero code, maximum speed. Make professional sites easy, fast and
                fun while delevering best-in-class SEO, performance
              </p>
              <div className='hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full'>
                <Link
                  href='/'
                  className='flex items-center justify-center w-max rounded-full border-t border-foreground/30  bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 md:gap-8 shadow-2xl shadow-foreground/40 cursor-pointer select-none'>
                  <p className='text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:marker:pr-0'>
                    ✨ Start building your dream website now!
                  </p>
                  <Button
                    size='sm'
                    className='rounded-full hidden lg:flex border border-foreground/20'>
                    Get Started
                    <ArrowRight className='w-4 h-4 ml-1' />
                  </Button>
                </Link>
              </div>
            </div>
            <div className='relative flex items-center justify-center mx-auto  py-10 md:py-20 w-full'>
              <div className='absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]'></div>
              <div className='-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl'>
                <Image
                  src='/assets/dashboard.svg'
                  alt='Dashboard'
                  width={1200}
                  height={1200}
                  className='rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border'
                />
                <BorderBeam size={250} duration={12} delay={9} />
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
      {/* How it Works  */}
      <Wrapper className='flex flex-col items-center justify-center py-12 relative'>
        <Container>
          <div className='max-w-md md:mx-auto text-start md:text-center'>
            <SectionBadge title='The Process' />
            <h2 className='text-3xl lg:text-4xl font-semibold mt-6'>
              There steps to build your dream website
            </h2>
            <p className='text-muted-foreground mt-6'>
              Turn your vision into reality in just 3 simple steps
            </p>
          </div>
        </Container>
        <Container>
          <div className='flex flex-col md:items-center justify-center py-10 md:py-20 w-full'>
            <div className=''>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 lg:first:border-none first:border-gray-900'>
                {perks.map((perk) => (
                  <div
                    key={perk.title}
                    className='flex flex-col  items-start px-2 py-4 md:px-6 lg:px-8 lg:py-6'>
                    <div className='flex items-center justify-center'>
                      <perk.icon className='w-8 h-8' />
                    </div>
                    <h3 className='text-lg font-medium mt-4'>{perk.title}</h3>
                    <p className='text-muted-foreground mt-2 text-start'>
                      {perk.info}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Features  */}
      <Wrapper className='flex flex-col items-center justify-center py-12 relative'>
        <Container>
          <div className='max-w-md md:mx-auto text-start md:text-center'>
            <SectionBadge title='Features' />
            <h2 className='text-3xl lg:text-4xl font-semibold mt-6'>
              Discover our powerful features
            </h2>
            <p className='text-muted-foreground mt-6'>
              Astra offers a range of features to help you build a stunning
              websites in no time
            </p>
          </div>
        </Container>
        <Container>
          <div className='flex items-center justify-center mx-auto mt-8'>
            <Icons.feature className='w-auto h-80' />
          </div>
        </Container>
        <Container>
          <div className='flex flex-col md:items-center justify-center py-10 md:py-20 w-full md:px-20'>
            <div className=''>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8'>
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className='flex flex-col items-start px-0'>
                    <div className='flex items-center justify-center'>
                      <feature.icon className='w-8 h-8' />
                    </div>
                    <h3 className='text-lg font-medium mt-4'>
                      {feature.title}
                    </h3>
                    <p className='text-muted-foreground mt-2 text-start'>
                      {feature.info}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Pricing  */}
      <Wrapper className='flex flex-col items-center justify-center py-12 relative'>
        <Container>
          <div className='max-w-md md:mx-auto text-start md:text-center'>
            <SectionBadge title='Pricing' />
            <h2 className='text-3xl lg:text-4xl font-semibold mt-6'>
              Unlock the right plan for your business
            </h2>
            <p className='text-muted-foreground mt-6'>
              Choose the best plan for your business and start building your
              dream website today
            </p>
          </div>
        </Container>
        <Container className='flex items-center justify-center'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 py-10 md:py-20 flex-wrap max-w-4xl'>
            {pricingCards.map((card) => (
              <Card
                key={card.title}
                className={cn(
                  "flex flex-col w-full border-neutral-700",
                  card.title === "Unlimited Saas" && "border-2 border-primary"
                )}>
                <CardHeader className='border-2 border-border'>
                  <span>{card.title}</span>
                  <CardTitle
                    className={cn(
                      card.title !== "Unlimited Saas" && "text-muted-foreground"
                    )}>
                    {card.price}
                  </CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent></CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Wrapper>
    </section>
  );
};

export default HomePage;
