# Image-Lambda

### How to use my lambda.

* Upload a new image to [Amazon s3](https://s3.console.aws.amazon.com/s3/buckets/evagrace-lab17?region=us-east-1&tab=objects)
* https://evagrace-lab17.s3.amazonaws.com/teddybear.jpg


### Issues I  encountered during deployment of this Lambda.

* Learning to navigate AWS definitely has a learning curve, and attention to detail. It took several tries implementing code to finally get a working version.
* I am sure with regular usage, this would not be as big of a challenge, but for a first time look, there was a lot of information to digest and navigate.

### A link to the images.json file.

* https://evagrace-lab17.s3.amazonaws.com/images.json

Image credits:
Image by <a href="https://pixabay.com/users/jennyzhh2008-1497331/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=978659">Hong Zhang</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=978659">Pixabay</a>

Image by <a href="https://pixabay.com/users/11959053-11959053/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4072651">Rayleen Slegers</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4072651">Pixabay</a>

Image by <a href="https://pixabay.com/users/chiplanay-1971251/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5431357">chiplanay</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5431357">Pixabay</a>


## Amazon s3 policy example


{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "Statement1",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject",
                "s3:PutObject"
            ],
            "Resource": "arn:aws:s3:::evagrace-lab17/*"
        }
    ]
}


### Collaboration:

[Ryan Galloway](https://github.com/rkgallaway) - utilized code from class lecture
[Mark Smith](https://github.com/markmrsmith) - tutor
