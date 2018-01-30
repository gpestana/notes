# The Zen of data pipelines

>> Talk based on the essays of [The Zen of Data Pipelines book](https://gpestana.gitbooks.io/the-zen-of-data-pipelines/content/)

### Scope

This presentation walks us through a compilation of lessons, best practices and
ideas about how to design, implement and maintain scalable data pipelines. The 
ideas and best practices described in the essays were learned while building a 
scalable and robust data pipeline from the bottom up. 

The main goal of the talk is to help everyone to make the best decisions early 
enough in the process of building scalable and robust data pipelines and foster 
the  discussion of details that often are overlooked by engineering teams. 

By following the principles discussed during the talk, we'll easily dodge the 
roadblocks introduced on our path while handling large amounts of data, 
bogus data input, security requirements and system complexity.

### Technology
The talk is language and technology agnostic and the best practices discussed
are applicable to every situation.

### Audience level
Beginner to intermediate. Some of the concepts discussed during the talk
require basic understanding of scalability, databases and overall system
architecture. However, those concepts will be explained and introduced
throughout the talk.

### Why
I've been writing the [Zen of Data Pipelines book](https://gpestana.gitbooks.io/the-zen-of-data-pipelines/content/), 
which is a compilation of essays on how to architect, build and maintain 
scalable data pipelines, while keeping the engineering team sane. Those lessons 
were learned the hard way (!!) while building the data pipeline for The Rapid 
Detection Service [RDS](https://www.f-secure.com/en/web/business_global/rapid-detection-service) 
from scratch. The system started by consuming, enriching and storing MB/data per
 hour to GBs per minute. Along the way many things went wrong and many 
invaluable lessons were learned. The Zen of Data Pipelines book and talk aims at
 helping everyone to avoid the same mistakes we did and to learn with our 
experience at RDS backend and devops team.
