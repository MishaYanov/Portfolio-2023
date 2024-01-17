import React from "react";
import { skills, experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Misha
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          minima at iste. Iure magnam sint id voluptas enim saepe adipisci
          perferendis ipsa odio officiis hic, aut sed distinctio recusandae
          error!
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => {
            return (
              <div className="block-container w-20 h-20">
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          non nisi nihil nesciunt atque dolores temporibus aliquam sint modi
          sunt quam sapiente ea possimus culpa dolore amet iure, esse dolorem!
        </div>
        <div className="mt-12 flex"></div>
        <VerticalTimeline>
          {experiences.map((experience, index) => {
            return (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div className="flex justify-center items-center w-full h-full">
                  <img src={experience.icon} alt={experience.company_name} className="w-[60%]] h-[60%] object-contain" />
                </div>}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
                iconStyle={{background: experience.iconBg}}
              >
                <div className="">
                  <h3 className="text-black text-xl font-poppins">{experience.title}</h3>
                </div>
                <p className="text-black-500 font-medium font-base" style={{margin:0}} >{experience.company_name}</p>
                <ul className="my-5  ml-5 list-disc space-y-2">
                  {experience.points.map((desc, index) => {
                    return <li key={index}>{desc}</li>;
                  })}
                </ul>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>

      <hr className="border-slate-200"/>
      <CTA />
    </section>
  );
};

export default About;
