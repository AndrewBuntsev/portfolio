import React, { CSSProperties } from 'react';
import SkillsGroup from './SkillsGroup';
import SkillCard from './SkillCard';

export default function SkillsPanel() {
  return (
    <div>
      <SkillsGroup title="Front End">
        <SkillCard title="JavaScript" img={require('./img/js.png')} />
        <SkillCard title="ReactJS" img={require('./img/react.png')} />
        <SkillCard title="Redux" img={require('./img/redux.png')} />
        <SkillCard title="TypeScript" img={require('./img/typescript.png')} />
        <SkillCard title="HTML 5" img={require('./img/html.png')} />
        <SkillCard title="CSS 3" img={require('./img/css.png')} />
        <SkillCard title="SCSS" img={require('./img/scss.png')} />
        <SkillCard title="C #" img={require('./img/csharp.png')} />
      </SkillsGroup>

      <SkillsGroup title="Back End">
        <SkillCard title="NodeJS" img={require('./img/nodejs.svg')} />
        <SkillCard title="ExpressJS" img={require('./img/express.png')} />
        <SkillCard title="Microsoft .NET" img={require('./img/net.png')} />
      </SkillsGroup>

      <SkillsGroup title="Databases">
        <SkillCard
          title="Microsoft SQL Server"
          img={require('./img/mssql.svg')}
        />
        <SkillCard title="MongoDB" img={require('./img/mongo.png')} />
        <SkillCard title="SQLite" img={require('./img/sqlite.png')} />
      </SkillsGroup>

      <SkillsGroup title="Version Control">
        <SkillCard title="GIT" img={require('./img/git.png')} />
        <SkillCard title="TFS" img={require('./img/tfs.png')} />
        <SkillCard title="Tortoise SVN" img={require('./img/svn.png')} />
        <SkillCard title="Tortoise CVS" img={require('./img/cvs.png')} />
      </SkillsGroup>

      <SkillsGroup title="Deployment">
        <SkillCard title="Teamcity" img={require('./img/teamcity.png')} />
        <SkillCard title="Octopus Deploy" img={require('./img/octopus.png')} />
        <SkillCard title="PM2" img={require('./img/pm2.png')} />
        <SkillCard title="CruiseControl.NET" img={require('./img/cc.png')} />
      </SkillsGroup>
    </div>
  );
}
