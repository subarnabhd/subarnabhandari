"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";

const Faq = ({ acc }: { acc: any[] }) => {
  return (
    <div>
      <Accordion className="text-sm font-semibold color-primary-800"
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              height: "auto",
              transition: {
                height: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  duration: 1,
                },
                opacity: {
                  easings: "ease",
                  duration: 1,
                },
              },
            },
            exit: {
              y: -10,
              opacity: 0,
              height: 0,
              transition: {
                height: {
                  easings: "ease",
                  duration: 0.25,
                },
                opacity: {
                  easings: "ease",
                  duration: 0.3,
                },
              },
            },
          },
        }}
      >
        {acc?.map((a: any) => (

          <AccordionItem  className="" key={a?.id} title={a?.title}>
            <span className="text-base font-normal color-neutral-7">
            {a?.description}
            </span>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
