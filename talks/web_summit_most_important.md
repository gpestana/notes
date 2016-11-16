## Facebook 
Alex Stamos FB CSO

- Make the world more open and connected
- Free basics by facebook -- narrow the gap of internet connectivity
- Connect the world safely
- Safety != security
- Perfectly secure software does not mean that software is secure
- Safe oriented software design
- Username/password paradigm: too old and outdated.
- Password mishandling is still the most harmful ... (no need for really intricate techniques and attacks)
- Machine learning model that verifies user login (even if password is correct)
- Test user passwords against the passwords which are being traded in the black market
- Design software for people who don't have political freedom and build tools that are safe for them to use online
- Threat based security is essential in the future. Threat exchange online
- Think about safety from day 1. Foresee safety-harmful events from day one
- Make sure you understand different countries and cultures their perspective on security

FB opensource contributions:
- osquery (https://osquery.io/):
  - distributed query engine for logs running processes, logged in users, password changes, USB devices, firewall exctp..
    E.g.:  osquery> SELECT uid, name FROM listening_ports l, processes p WHERE l.pid=p.pid; 
  - An option to query deployed sensors?
  - An option to our infra?

- Mcrouter memcached protocol router for scaling memcached deployments
- Buck building tool (https://buckbuild.com/)

For low-level infrastructure security:
- Infrasctructure security solution : PrivateCore
"vCage secures servers with software-based attestation, full-memory encryption, and operating system hardening, providing a foundation for trusted computing on x86 servers" 
Deal with unauthorized physical access, and malicious hardware devices and whatnot

https://privatecore.com/solution-overview/index.html

# Workplace by facebook
The next generation workplace

Email will disappear -- new generations are not using it anymore
Companies will have to reeinvent theslves to ddrive the most productivity.
How: Collaboration tools should be mobile phone centric (not only laptop centric)
Connection is essential
Facebook workplace: the new product to connect employees in companies
- No go! :)

## CTO of Microsoft Azure on Security
@markrussinovich

- Protect
Let your users bring their identity (do not create a auth system yourself)
Multi-factor id for customeers and yourself
Network segmentation -  do not expose uneccessary ports and systems to the outside world
Use waf
Always encrupt data and external network access
SSL!
Secret management - protect it. keep secrets out of source code. E.g. github is constantly being scanning for secrets
Keep try and monitor life time certificates for when they get expired: use services to automate it

- Detection
Monitoring, alerts and notifications are important to have set up. Stuff that should not happen should raise alerts

- Respond
Incident drills: have a script; practice regularly; 
Either have one a red team or hire one
Updates: without fast updates, you can't evict an intruder
Have a red button to shutdown access

60% of small comanies that suffer a cyber attack are out of business within six months

## Ethical Data: Talk about FB way to 'protect' data by adding dummy data
(In between lots of rambling about data privacy and whatnot, one of the speakers mentioned that Facebook is startig to use Differential Privacy for protecting users information and that's the way to go in the future for any company which is dealing with crititcal user information)

"Differential privacy formalizes the idea that a "private" computation should not reveal whether any one person participated in the input or not, much less what their data are"

Having a large statistical database that can be publicly disclosed wihtout releasing information that links data to specific entities of the dataset.

More: https://en.wikipedia.org/wiki/Differential_privacy, https://github.com/frankmcsherry/blog/blob/master/posts/2016-02-03.md)

 - Didn't catch any mention of ATP. Pretty much all around data privacy or black hat/white hat stuff.

## FullSTK: Data stream based technologies

Globally distributed Realtime data stream network (SDN)
Pub/sub APIs
Good replacements for DIY data stream services
Streaming data? --> continuous data stream (no download)
Possible to publish and subscribe content and broadcast, unicast and multiplex amongst channels
CDN vs SDN - similar but static content vs dynamic content
PubNub use cases:
 - Chat, financial data, IoT, collaborative dev tools
 A bunch of SDKs 
 Blocks: micro services between data aggregation and data delivery that perform certain actions in the data (not sure if the resources provision is as smart and out of the box as AWS)

https://www.pubnub.com/knowledge-base/

Panel:
General Ideas:
- Stream data between devices (iot) is going to be a big thing.
- Fast data vs big data
- How to make it secure and efficient for small devices
- All companies are data businesses nowadays. Passing data around in real time will become more and more important, even within organizations

## The Future of devops: Trends and predictions
- Containers, microservices, complex integrations, hybrid infrastructures --> create benefits BUT increase burden of operations and release management
- How to operate at a large scale, fast?
- Best practices for devops

- Containers have become the defacto for microservices architecture. Serious questions on how to orchestrate and manage containers
- Container management as IaaS or PaaS?

Steve Brodie:
- Trends and predictions for devops
- ElectricCloud - devops release automation solution. Top solution out there (https://electric-cloud.com/)
- Growing importance of devops after start seeing the agile boom. Competitive world, software at the core
- Good devops practices and frequent released improve ..

- DevOps adoption
  - challenges for entreprises: legacy systems,  hybrid architectures, growing security risks, regulatory demands, lots of tools.
  - instill devops in all teams

  - Application release automation is HOT -- one of the areas where devops can bring more value to the organization (Gartner confirms). Release well and fast!
  - Automation testing seen as another high valuable quality of good devops

- Tools and tech
 - Rise of containers and microservices.
 - Microservices (services that do it well and have well defined interfaces) are easier to deploy rapidly
 - Monolith vs microservices vs hybrid 
 - Lot os orchestration services. All different between themselves. Lock-in?

- DevOps release automation in ElectricFlow
Model how to move containers in the pipeline (dev, prod, QA) and how to deploy them
Abstraction layer on top of Kubernetes, Google Container engine, Amazon, etc.. No details to understand no vendor lock-in

- Other big trend: Shift left in the pipeline
Shift left operations and verifications: do things earlier on in the lifecyle to reduce impact and cost.
The earlier issues are spot, the least costly they will be 
  - Automated testing
  - Monitoring BEFORE production release (continous monitoring) -- https://www.dynatrace.com/
  - Implement test acceleration capabilities (tests taking too long)
  - Security compliance verifications as left as possible

## When software eats software
- Measure idea to production! The most important metric for development and operations teams: idea to production and try to decrease it as much as possible.

## Other thoughts here and there (painels)
- Full stack devops teams/engineer is the way to go.
- Deployments to production should not be pushed to outside business hours
- Docker is hell (backwards compability issues.)
- Continuous integration done right: many approaches, few teams doing it.
- Easy and no fear on pushing the release button multiple times a day
- Devops is a mindset. It evolved from agile methofology until continuous delivery.
- Devops must be centered in metrics
- Shift left testing (do it as early as possible)

## AWS: Move to the next scale: Go to 1M users
- Do work on what makes you special. AWS takes care of the rest
- Do not lift and shift into AWS (if getting into AWS now)
- Automate node/machine deployment (stackman helps here?)
- ADD: Automate, Decouple infra, Don't reinvent the wheel
- no free lunches: Lock in all tha startups: http://aws.amazon.com/start-ups/

Tech:
- 12 Regions (each region with at least 2 high availability zones)
- Leverage high availabiluty out odf the box or explicitly
- Several high available and low latency services: CloudFront, Route53, AWS Lambda, Elastic Load Balancer, etc..
- Simple approach to scale: upgrade instance type, vertically (more horse power)
  - with all the obvious problems
- Don't want to be a DB maintainer? Use AWS DB services (Elasticsearch, etc..)
  - self managed vs fully managed
  - patches, backups, upgrades, scalabilty, high availability, replication etc.. managed by AWS (looking at you AWS Elasticsearch)
- CloudFront + AmazonS3: deliver static content
- Cloudfront rocks
- How to start scalling horizontally: Add more instances of the service in different availability zones. Load balancer (ELB) multiplexing requests
- Database: master/slave model
- Multiple instances behind the ELB and in different availability zones
- Database: read replicas! Take traffic out from master database
- This infra takes us pretty far already
- AutoScalling. CloudWatch: what is going to trigger the scalling of instences, mem, etc..?
- Use AS when infra is ready
- AWS Lambda, SQS, etc..
- monitor all the things!
- 10M+ users? other types of problems arise. Get there first and then improve on top of what's done already

## Big data meets DevOps
Predictive analytics
--> interesting for us: So far, devops automation has been *the* thing. BUT collection big amount of data from many tools how to apply machine learning to predict and failures and detect areas for automation in the pipeline
Automation --> Analytics+predictive machine based learning within the devops realm

--> Backend: we're using almost all the best practices and no structural legacy to manage. How can we step up and use devops predictive analysis in our cases?

## Others general: Mikko Hyppönen, Stallman, crypto currencies

# Interesing security startups (and others)

- Secr Secure
Similar to RDS concept technology-wise, but for webservices. Automated webscanner for webservices.

- CyberSafe: Threat intellegence platform
Security Analytics, APT Protection, Authentication, Application Security and Data Security through white labeled partnerships with HP, Enterprise Security, FireEye, Swivel Secure and DataCastle.
Bundling different services together depending on the customers' needs. Manintaining it. They don't offer detection and response 'as a service' but rather service as a service (?)
Getting some big customers in Portugal

I wonder if we could white label some of these technologies too instead of creating everything from the bottom up?

https://www.cybersafe.pt

- OZON: SaaS cyber security for eCommerce
https://www.ozon.io/
The same as RDS, but for eCommerce, though it only offeres the threat detection/blocking as a service, not the threat response.

- SitServ
Monitors IP Traffic, performs penetration tests, detects attacks and provides the toolst to prevent them (they wish to get there, but still far away..)

- Chime (AVG's Sense)
'Turn your router into the foundation of the connected home'. Seems to be Sense's solution of AVG

- Codacy
Portuguese startup that automates code reviews with code style checks, security, code duplication, test coverage and others. They claim to 'saves hours in code review and code quality monitoring'.
Theyäve been pretty successful and growing a lot. I can see the need for it - would be nice to have a similar thing in our team. Caveat: the code is in the cloudz :)
https://www.codacy.com/

- CoScale
Service that leverages the 'big data devops' which aggregates and monitors production data. Early implementation of what has been talked before: 'Analytics+predictive machine based learning within the devops realm'
http://www.coscale.com/

-> DevOps metrics

