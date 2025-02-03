import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { FaChevronDown } from "react-icons/fa";

export function Accordion({ children }) {
  return (
    <AccordionPrimitive.Root type="single" collapsible>
      {children}
    </AccordionPrimitive.Root>
  );
}

export function AccordionItem({ title, children }) {
  return (
    <AccordionPrimitive.Item value={title} className="border-b border-gray-300">
      <AccordionPrimitive.Header className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100">
        <AccordionPrimitive.Trigger className="flex justify-between w-full text-lg font-semibold">
          {title}
          <FaChevronDown className="ml-2 transition-transform duration-300" />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content className="p-4 bg-gray-50 text-gray-700">
        {children}
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
}
