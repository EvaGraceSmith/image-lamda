# image-lamda

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
