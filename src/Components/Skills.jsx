import React from "react";
import styled from "styled-components";
import Skill from "./Skill";

export default function Skills() {
  const skillsData = [
    { name: "HTML", url: "html.svg" },
    { name: "CSS", url: "css.svg" },
    { name: "JavaScript", url: "js.svg" },
    { name: "Java", url: "https://www.svgrepo.com/show/184143/java.svg" },
    { name: "Spring Boot", url: "data:image/png;base64,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" },
    { name: "My Sql", url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAq1BMVEX///8AZ4zOiywAXYUAZIoAW4QAYYjOiin//vzMhRAAWYPt9PdJiKTc6e7Mhht2o7jR4ef05tXmx6Hv2cGnxNHUmUtgla3SkzzQkDL89/HLgggoeZm5z9rNhyDx9/n58efI2+OfvszXoVqWuMcXcpTftoPoy6jSlkK70txZkqt6prpChKE5f554pLlrnLPx38nbq2+Jr8EAT33VnlXivpDZp2jes33hu4voy6ffVFLJAAAH9klEQVR4nO2cC3uiOhCGYXNRAlitl7YIFAu1Yl0vbdee///LDkmgIhqtu1VamHf3qZQgJp/JZGYSqmkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA/fBHV9OeWXYtSsWMCKKIWJOyK1IiA6rHQ0IxmQVlV6UsfB3Zmtae00SFedmVKQkfU5+/mlOE0XPbtutoGWakJw/sYaICQjSa185Cukz308MBI4yrgGjcLrVOF+cZWdmhb7YDdxUxSsmVf+g9VcPEZLV9JrAYprpbTnXKISAsKJxqWwSzuE5dYUX0neZOdEr1OlkFK3MNJqH9cXKOMBuVVKESMCmTbZ+8oI0Ibr3cpmlmFkcs12o7wps5o/IELEqP9GnutD+j9LmM+pQCJYE8cLd9RAvVR4R50UfIsCiKL1uV0tgMhiIziqaKoqqhE4Uz4Ec4i6qqzoqpvm07CSdtRVm1sNmur5jSQ1g1UCrGQGUVeboNKcsqhU2oqsf7Omb1GA1TNlSNBpfg4UXrUhpDNFMVPWNSj3SCHyl7fLsuHcHXiTKZGmMUXLAqpeES5VjQJgjXIoz+fShlomNah4z7EB1oZYjq4CPY7FCU7COsX6wqpeGyg1/0lKLqh04rdrCNZh2mx/nOKkOhnFbfT4rZ4eUEm2D13FkRPjRQpZJjSqq+WSXTwFJ5zEH1O8KcieHeI1SVUZrhqneEkIX8JcK6KqM0IbjiiXaXDTRu+XSMVD7zrOohtEl41tBFOKaq9GHAdLqqdEZpyB2EFUVBrAyepgxTVuWNOiFJBsMcI7OtzjG7zwghNqysaTQxsZMhT/l+BHXoYLoWIiyuaiAdkqgd8bWEtjrHzLFDneCqGkcLIR1daXwbwuGFVnPAWEXzSn7MSCR6+fTlyPfs6mxY0RmiHaQHV+r8qsS0GK2saUyZHnUJe9XfszU6mj/0nw+nXSpAcMgk2JNRGE75bFpt2orx7vcsSlDiJTBCri5bpctj7/WKVwxhilA0mPaCC1fo2+AmoeVV7Z5xKBBhWoP1lsPwHUpn36tm98JQ2dmCUTianNwTmzuoSvecL95skhiEKDi1Cqcwigh/oGa/1PaQUIoIsk6YlBaPr0+3jQJOJy3tXP/p3+TpL8f3aVnXSK5sXe/WIkKYnDF2HDGsC/ZtGrdxWkiVIX6R7o3hFQXYaNB9MlrFIq9lPKSlCg0SX5phis/mK0d6Btv9DAtnhcqkX4E3p/ErQaHBuyzNlctfPaPLi7tGcrxXAy2YsbNt3jRlK/lPvLPaYZOsTKe/P3W7hSOa5DRuCjS4BmNHttjJ9QXD4Do0DD4eDmggHns6U8AgNbCG/GXHE53zs3Qgfn7OQ/vj8Tau7/eX3oiv3Xi8z5m95qIv3vOoHdEgcSRnL2cZDkIDHPcQb2fBIpiiG+gB+rwGT7yVnqLwXnSD3TZyaRp97agGmha+nCPBaqajQHQHtG34VpQ3fmV/XoOmaM6torRjiG5wVzz/5qVvOqqB1j7Hg1+ZBlPeXhRulVFhCMz2uTW4bn1aA80/Q9SUaWAi0e/zRSN+Cs+1nAY9K+E5KNyjFw2Hw4gb7fNrcA4yDaT9Q/kYPhJn2nkNRgRjzIqBfo/bDbLRoKH4rG+vQZs3JL/a7ZKsJKcBLQrFEQZVbh/qc5vYGu//rG+vgfSHcptDZmK6DE7TQHoAreW4m9HZzJPfX4MJEc5AViD7Bd8XdYoG2lp4gl4rwzCMm8c0Vvj+GmjST8oik5hmDTtJA218m8QLv/I0PGMp2v0DNJB+UpquEE6B3Cd5mgZas7u+MZwMwxPe8S1v+A/QQJORgTyf8xfyGqDjGnDu7lM63ceWEGGp/QwNwo/ur/kyUBJ+419okGchRDCaP0MD0XC5PVTIkfqG/6iBjJR+igbab5pOh9I/SuPInAbh32jwtE+DdKyIC76VBjI6itNW4XRB/CwajKXJFN7Ut9IgnRDt1D9K/aWv1kB++YsWP+3wBp8QN56FbQ2EY0RX237zjgbF1h7W4M7LbOJ2/qAjEmnOu3SwRf6gwy9o/PniJh5lWwPZASLhNn/sDcxpEAhxokK+6ZAGzY4IIRqv/Jdb4Ty1/pNW8U6UGOu1l02eTSFLayvPdAEKGkw+Moibh47z+YNYhNh0Fg8G8/l8IHnWMw3unvrbPN2KdOEvZ8Hf/Z/MJ7Yarw8cocEvz9tcIMMNz7gt3uZNe3996CyvtcfHs2uwSTNvkrhbOZRYpOIxphtkVlZqsJM4l8100khyuZ113rjTzpu84H1/Wrq1TiKRe+3htfm0PoMGdFuDIF1uyD2Eup1HcoeM4mzZIYfUoBAqiOa0nIdsgUUbe9vRhNSh0V9kFyz6TstrFO/CM67rjvYwfhgvz6ABIwixXNpgojO+1p/7q1XtF75RcpNvtUdzazbMEW00cIwi3sNbJ/d5ze6ysQkmWo0b7kU2bnKJ6Pvxuu8VbuIk3/6yo/XvnPvLWMy26562wDja2MSDy4wZzbsUXnot5gJjUbxm5z7iP//3LRkd9g+OMOYmoOF0v7RKF2dF/0UDbWEIES7uGn0lrrCJRx7ROkQnmR89j3tLP4EgHhSJI+ky/MsjJ9JAXNgz+ltchncRs0JUmw1DLtrxC7h7gdC8Pn8AsvdCdtGtsOpbJ/P49i61GQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADH+B/Q2Z6tLWJlRQAAAABJRU5ErkJggg==" },
    { name: "Node", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi-DkfxsdUNsrEDMIPIaqvCnxoDxkLtZxvVw&usqp=CAU" },
    { name: "Git", url: "git.svg" },
    { name: "Bootstrap", url: "bootstrap.png" },

  ];
  return (
    <Cont id="skills">
      <Heading>Skills</Heading>
      <SkillsCont>
        <Skill data={skillsData} />
      </SkillsCont>
    </Cont>
  );
}

const Cont = styled.div`
  background-color: #67687c;
  padding-bottom: 9rem;
  padding-top: 20px;
  clip-path: polygon(
    0 8%,
    /* left top */ 100% 0,
    /* right top */ 100% 92%,
    /* right bottom */ 0 100% /* left bottom */
  );
  @media (max-width: 1264px) {
    clip-path: polygon(
      0 7%,
      /* left top */ 100% 0,
      /* right top */ 100% 93%,
      /* right bottom */ 0 100% /* left bottom */
    );
  }
  @media (max-width: 768px) {
    clip-path: polygon(
      0 5%,
      /* left top */ 100% 0,
      /* right top */ 100% 95%,
      /* right bottom */ 0 100% /* left bottom */
    );
  }
  @media (max-width: 500px) {
    clip-path: polygon(
      0 2%,
      /* left top */ 100% 0,
      /* right top */ 100% 98%,
      /* right bottom */ 0 100% /* left bottom */
    );
  }
`;
const Heading = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: white;
  padding-top: 5rem;
  text-align: center;
  font-size: 2rem;
`;
const SkillsCont = styled.div`
  margin: 4rem auto;
  width: 50vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media (max-width: 500px) {
    margin: 2rem auto;
  }
`;
