function createJS() {
    if [-z "$1"]
    then
        echo "need JS name"
    else
        # TIME=$(date + %H%M)
        # DAY=`date + %Y%m%d`
        # TAG="$DAY-$TIME-$2-$1"

        # echo "Create $TAG"
        # eval "git tag $TAG"
        # eval "git push origin $TAG"
        # eval "git push upstream $TAG"

        # if ["page" == "$2"]
        # then
        #     TAG echo "Create $TAG_CHANNEL"
        #     eval "git tag $TAG"
        #     eval "git push origin $TAG"
        #     eval "git push upstream $TAG"
        # fi
    fi
}

if [-z "$2"]
then
    echo "need Dir name"
else
    # if ["$1" == '-d']
    # then
    #     deleteTag $2
    # else
    #     createTag $1 $2
    # fi
fi
