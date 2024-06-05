import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact = () => {
  return (
    <section className="mt-10">
      <Container>
        <Flex className="lg:gap-6 flex-col lg:flex-row md:flex-row sm:flex-row sm:items-center rotet:justify-between">
          <div className="lg:w-[30%] sm:w-[50%] p-[20px] lg:p-[40px] lg:shadow-lg">
            <h2 className="text-[16px] font-popins font-medium text-black leading-[24px] flex items-center gap-[16px] mb-[24px]">
              <div className="w-[40px] h-[40px] bg-prymari-red rounded-full flex justify-center items-center">
                <IoCallOutline className="w-[20px] text-white" />
              </div>
              Call To Us
            </h2>
            <h5 className="text-[14px] font-popins font-normal leading-[21px] text-black mb-[16px]">
              We are available 24/7, 7 days a week.
            </h5>
            <h5 className="text-[14px] font-popins font-normal leading-[21px] text-black mb-[16px]">
              Phone: +8801611112222
            </h5>
            <hr className="mb-[32px] mt-8" />
            <h2 className="text-[16px] font-popins font-medium text-black leading-[24px] flex items-center gap-[16px] mb-[24px]">
              <div className="w-[40px] h-[40px] bg-prymari-red rounded-full flex justify-center items-center">
                <MdOutlineMail className="w-[20px] text-white" />
              </div>
              Write To Us
            </h2>
            <h5 className="text-[14px] font-popins font-normal leading-[21px] text-black mb-[16px]">
              Fill out our form and we will contact <br /> you within 24 hours.
            </h5>
            <h5 className="text-[14px] font-popins font-normal leading-[21px] text-black mb-[16px]">
              Emails: customer@exclusive.com
            </h5>
            <h5 className="text-[14px] font-popins font-normal leading-[21px] text-black mb-[16px]">
              Emails: support@exclusive.com
            </h5>
          </div>
          <div className="rotet:w-[70%] lg:w-[70%] lg:p-[40px] shadow-lg p-[20px] lg:shadow-lg">
            <Formik
              initialValues={{ name: "", email: "", phone: "", message: "" }}
              validationSchema={Yup.object({
                name: Yup.string().required("Required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                phone: Yup.string()
                  .matches(/^[0-9]+$/, "Must be only digits")
                  .required("Required"),
                message: Yup.string().required("Required"),
              })}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  console.log(values);
                  resetForm();
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Flex className="gap-[16px] rotet:flex-row lg:flex-row flex-col">
                    <div>
                      <Field
                        className="text-black rotet:w-[200px] w-[235px] h-[50px] bg-[#F5F5F5] pl-[16px] text-[16px] font-popins font-normal leading-[24px] select-none"
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </div>
                    <div>
                      <Field
                        className="text-black rotet:w-[200px] w-[235px] h-[50px] bg-[#F5F5F5] pl-[16px] text-[16px] font-popins font-normal leading-[24px] select-none"
                        type="email"
                        name="email"
                        placeholder="Your Email *"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </div>
                    <div>
                      <Field
                        className="text-black rotet:w-[200px] w-[235px] h-[50px] bg-[#F5F5F5] pl-[16px] text-[16px] font-popins font-normal leading-[24px] select-none"
                        type="text"
                        name="phone"
                        placeholder="Your Phone *"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </div>
                  </Flex>
                  <div>
                    <Field
                      className="text-[16px] select-none text-black leading-[24px] font-popins font-normal lg:w-[737px] w-[300px] lg:h-[207px] h-[100px] bg-[#F5F5F5] pt-[13px] pl-[16px] mt-[32px]"
                      component="textarea"
                      name="message"
                      placeholder="Your Message"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      style={{ color: "red" }}
                    />
                  </div>
                  <div className="lg:ml-[72%] ml-20">
                    <button
                      className="w-[215px] h-[56px] bg-prymari-red rounded-[4px] text-[16px] text-white font-popins font-medium leading-[24px] mt-[32px] mb-11"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Send Message
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Contact;
