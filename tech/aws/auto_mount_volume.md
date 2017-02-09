## Mount automatically volumes in EC2 instances with cloudformation

To mount automatically volumes in EC2 instances at creation and instance update, it is possible to use cloud-init
directives or shell script which runs when the instance is created. The commands running at instance creation
must wait for the device to be available and create a filesystem if needed before mounting the volume.

```
InstanceWithVolume:
  Type: AWS::EC2::Instance
   Properties:
   ... 
   UserData:
      "Fn::Base64": !Sub |
        #!/bin/bash
        # Waits for volume to attach
        while [ ! -b /dev/sdh ]; do
          echo 'Waiting for volume to attach...';
          sleep 1
        done

        # Mount and initializes volume (if needed)
        blkid /dev/sdh || mkfs.ext4 -L influxdb-data /dev/sdh
        mkdir -p /data
        mount -t ext4 /dev/sdh /data
        echo '/dev/sdh /data ext4 defaults,nofail 0 2' >> /etc/fstab
```
