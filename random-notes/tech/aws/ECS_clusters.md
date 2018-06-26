# Deploying AWS ECS cluster

## AWS::ECS::Cluster

Creates an ECS cluster. Has no properties, to connect to use the container agent;

## AWS::AutoScaling::AutoScalingGroup

Service which starts and terminates instances based on health checks and user defined policies

It requires availability zones in which the service can be scaled up. The minimum, maximum size of the scaling group are required to define.
It is optional to specify in which VPC and subnets (public or private) the ECS will run.
It is possible to define notication configurations which are triggered when the autoscalling group triggers operations (instance launch, instance error, instance termination, etc).


## AWS::AutoScaling::LaunchConfiguration

Service used by the Auto scaling group to configure the EC2 instances which are deployed by the Auto scaling.

This is the resource where CloudFormation init commands are defined for EC2(aka ECS in this case) instances. The CloudFormation init includes metadata in the instance to be used by the cfn-init helper. The cfn-init reads the template metadata and performs operations on the instance, such as installing packages, writing files to disk, start and stop services and pretty much any bash script which will run when the instances is created (or updated, or before deletion)


## ScaleUpPolicy/ScaleDownPolicy

A ScalingPolicy defines when to scale the auto scaling group up or down and by how much.

When used with CloudWatch, instance metrics can trigger scaling up/down, based on user defined parameters. This allows the autoscalling group to be automatically scaled up and down based on instances metrics. One of the parameters must be the AutoScalingGroupName, to which the policy will take effect. A ScalingAdjustment parameter defines by how many instances (+/-), the auto scalling group should scale the group when a auto scaling policy is triggered.

## AWS::CloudWatch::Alarm

Creates a CloudWatch alarm.

The cloud watch alarm will trigger actions based on CloudWatch metrics. This actions may triggering an action of ScalingPolicy, send notifications, integrate with 3rd party services, etc.
