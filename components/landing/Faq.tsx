import React from "react";
import Container from "./Container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "How does your AI SaaS image editing tool work?",
    answer:
      "Our platform utilizes advanced artificial intelligence algorithms to analyze and enhance images. It automatically detects elements such as lighting, color balance, and composition, and applies appropriate adjustments to improve the overall quality of the image.",
  },
  {
    question: "What types of images can be edited using your platform?",
    answer:
      "Our AI SaaS image editing tool is versatile and can handle various types of images, including photographs, digital artwork, product images, social media graphics, and more.",
  },
  {
    question: "Is my data secure when using your platform?",
    answer:
      "Yes, we take data security seriously. Our platform employs industry-standard encryption protocols to safeguard your data and ensure that it remains protected at all times. Additionally, we adhere to strict privacy policies to maintain the confidentiality of your information.",
  },
  {
    question: "Do you offer technical support? ",
    answer:
      "We offer comprehensive customer support to assist you with any questions or issues you may encounter while using our platform. Our team is available via email, live chat, and phone during regular business hours to provide prompt assistance and ensure a smooth user experience.",
  },
];

export default Faq;
