import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";

const WhyChooseUs = () => (
  <MaxWidthWrapper>
    <div className="flex flex-col-reverse lg:flex-row gap-7 items-center justify-between py-10">
      <div className="flex flex-col gap-5">
        <p className="text-2xl lg:text-4xl text-green-900 font-semibold">
          Why Choose us
        </p>
        <p className="text-xs lg:text-base max-w-[540px] font-light text-grey-700">
          At Propelius Technologies, we don't just build apps; we craft digital
          experiences. Our client-centric approach, coupled with our technical
          excellence, ensures your app is tailored to your unique needs and user
          expectations. Choose us for a partnership that values your success as
          our own.
        </p>
      </div>
      <div className="w-full max-w-[707px] lg:h-[340px] object-cover">
        <img src="/images/why_choose_us_img.png" alt="" />
      </div>
    </div>
  </MaxWidthWrapper>
);

export default WhyChooseUs;
