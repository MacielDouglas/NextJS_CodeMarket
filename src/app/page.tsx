import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: 'Entrega imediata',
    Icon: ArrowDownToLine,
    description: 'Receba seus recursos por e-mail em segundos e baixe-os imediatamente.'
  },
  {
    name: 'Garantia de Qualidade',
    Icon: CheckCircle,
    description: 'Cada ativo em nossa plataforma é verificado por nossa equipe para garantir nossos mais altos padrões de qualidade. Não gostou? Oferecemos uma garantia de reembolso de 30 dias.'
  },
  {
    name: 'Pelo Planeta',
    Icon: Leaf,
    description: 'Destinamos 1% das vendas à preservação e recuperação do meio ambiente natural..'
  }
]

export default function Home() {
  return (
  <>
    <MaxWidthWrapper>
      <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>Seu marketplace de alta qualidade para{''} <span className='text-blue-600'>recursos digitais</span>.</h1>
        <p className='mt-6 text-lg max-w-prose text-muted-foreground'>Bem vindo ao CodeDigital. Cada recurso em nossa plataforma é verificado por nossa equipe para garantir nossos mais altos padrões de qualidade.</p>
        <div className='flex flex-col sm:flex-row gap-4 mt-6'>
          <Link href='/products' className={buttonVariants()}>Browse Trending</Link>
          <Button variant='ghost'>Nossa promessa de qualidade &rarr;</Button>
        </div>
      </div>

      {/* TODO: List Products  */}
    </MaxWidthWrapper>

    <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
          {perks.map((perk) => (
            <div key={perk.name} className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
             <div className='md:flex-shrink-0 flex justify-center'>
              <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>{<perk.Icon className="w-1/3 h-1/3"/>}</div>
              </div>
              <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-gray-900'>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.description}</p>
              </div>
            </div>
              )
          )}
        </div>

      </MaxWidthWrapper>

    </section>
  </>
  );
}
