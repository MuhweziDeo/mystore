import { Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            We specialize in getting items from the USA, Dubai, China, Kenya and UK. We
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
           Currently can ship items from car accessories and bikes.
          </Heading>
        </span>

        <Heading
            level="h3"
            className="text-1xl leading-10 text-ui-fg-subtle font-normal"
          >
            We always keep our process open to see where you money is spent and only charge a small fee per item depending on the product.
            </Heading>
       
      </div>
    </div>
  )
}

export default Hero
