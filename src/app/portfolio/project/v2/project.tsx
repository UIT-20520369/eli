"use client";
import * as React from "react";
import styles from "./styles.module.css";
import { Oswald } from "next/font/google";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
});
import { motion, useAnimationFrame } from "framer-motion";

export default function ProjectV2() {
  return (
    <div className={styles.container}>
      <div
        style={{
          width: "93%",
          height: "85%",
          display: "flex",
          flexDirection:'row-reverse',
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "60%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{ color: "#2E2E2E", marginRight: "7%", textAlign: "left" }}
          >
            <motion.p
              whileInView={{
                opacity: [0, 0.75, 1],
                translateY: [50, 25, 20, 15, 10, 5, 0],
              }}
              transition={{
                duration: 0.6,
                delay: 0.02,
              }}
              style={{
                fontSize: 16,
                color: "#0F172A",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Dự án
            </motion.p>
            <motion.p
              whileInView={{
                opacity: [0, 0.75, 1],
                translateY: [50, 25, 20, 15, 10, 5, 0],
              }}
              transition={{
                duration: 0.6,
                delay: 0.02,
              }}
              className={`${oswald.className} ${styles.header}`}
            >
              Vinhomes Ocean park
            </motion.p>
          </div>
          <motion.div
            whileInView={{
              opacity: [0, 0.75, 1],
              translateY: [50, 25, 20, 15, 10, 5, 0],
            }}
            transition={{
              duration: 0.6,
              delay: 0.02,
            }}
            style={{
              width: "90%",
              height: 4,
              backgroundColor: "#2E2E2E",
              marginTop: "15%",
            }}
          ></motion.div>
          <motion.p
            whileInView={{
              opacity: [0, 0.75, 1],
              translateY: [50, 25, 20, 15, 10, 5, 0],
            }}
            transition={{
              duration: 0.6,
              delay: 0.02,
            }}
            style={{fontStyle:'italic',maxWidth:'100%',color:'#475569',textAlign:'left',marginTop:'15%',fontSize:16}}
          >
            “Dự án Residences at Harmony Square là một tác phẩm kiến trúc độc
            đáo nằm ở trung tâm thành phố, kết hợp giữa kiến trúc hiện đại và
            yếu tố văn hóa địa phương. Thiết kế này mang lại sự hòa quyện giữa
            không gian sống hiện đại & bản sắc đặc trưng của cộng đồng. Dự án
            Residences at Harmony Square là một tác phẩm kiến trúc độc đáo nằm ở
            trung tâm thành phố.”
          </motion.p>
        </div>
        <div style={{ height: "100%", width: "80%", marginRight: "5%" }}>
            {/* 88% */}
          <img
            style={{ height: "100%", aspectRatio: 1.3 }}
            src="https://s3-alpha-sig.figma.com/img/6b50/5ac0/7a3dfc1ff1cdac614c251ef1d1d9f44e?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=otupfk5eLQnuMRj08YdnX0dJwI1rgUsnZZ0-9YpPk9p1SYrLJ9QLiGuH8usKz6JH~E1AMbJUqiYvoH0~fgoq0-a7ICkC9KBm0a7mCSgZIT3mMAVWiCCBRoT2cSnaBNOPa0NULt-0FR3DOtJJ69PfRWjSWATEMerN1hjWrpKzIC7HpyDPXUeRwQQIkxrqiqp5Bx51uFPA~-MKKW807vmGh-PLBpfZ2UKyPFHWbfcMAbjBtM6y73W7dDasQh3R863LI-u3PRzcaL6bBZjRSOYL7zni2P4RPG0Khs3j2NAhLMmREgrFiSlkzAE~gAcuJ~WrNVR9qCyJClM6DOe4itjbiA__"
          ></img>
          {/* <motion.p
            whileInView={{
              opacity: [0, 0.75, 1],
              translateY: [50, 25, 20, 15, 10, 5, 0],
            }}
            transition={{
              duration: 0.6,
              delay: 0.02,
            }}
            style={{fontStyle:'italic',maxWidth:'100%',color:'#475569',textAlign:'left',marginTop:'2%',fontSize:16}}
          >
            “Dự án Residences at Harmony Square là một tác phẩm kiến trúc độc
            đáo nằm ở trung tâm thành phố, kết hợp giữa kiến trúc hiện đại và
            yếu tố văn hóa địa phương. Thiết kế này mang lại sự hòa quyện giữa
            không gian sống hiện đại & bản sắc đặc trưng của cộng đồng. Dự án
            Residences at Harmony Square là một tác phẩm kiến trúc độc đáo nằm ở
            trung tâm thành phố.”
          </motion.p> */}
        </div>
      </div>
    </div>
  );
}
