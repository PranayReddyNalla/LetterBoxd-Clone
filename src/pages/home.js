import './home.css';
import { Card , CardMedia,Stack  } from '@mui/material';
import { useState } from 'react';
import { data,getdata } from './datafetcher';
import { get } from 'react-hook-form';
import { useEffect } from 'react';


function Home (){
    const [recentMovies,setRecentMovies]=useState(data);
    useEffect(()=>{
        const response= getdata("https://api.themoviedb.org/3/trending/movie/day?language=en-US");
        console.log(response);
    },[]);
        return (
        <div className="home">
            <header  style={{
                backgroundImage: "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQVFBgUFBQYGBgaGBkZGhgYGhgZGBgYGBgaGxgYGhgbIC0kGx0pHhgYJTclKS4wNDQ0GiM5PzkyPi0yNDABCwsLEA8QHhISHTIrIiAyMjIyMjIyMDAyMjIyMjIyMjIwMjIyMDIyMD4yNTUyMDIyMjIyMjAyMjIyMjIyMjIyMP/AABEIAQsAvQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAQMEBQYABwj/xAA9EAACAQIEAwYEAgkEAgMAAAABAhEAAwQSITEFQVEGEyJhcYEyQpGhsfAHFCNSgpLB0fFicsLhM6IVQ9L/xAAaAQACAwEBAAAAAAAAAAAAAAAAAgEDBAUG/8QAKREAAgIBBAEEAgIDAQAAAAAAAAECEQMEEiExQRMiUWEFgTKRcaHwI//aAAwDAQACEQMRAD8ApaWuiiirDzwgFKBSgVwFAHRXRRBaJVoAAClip4WxA+Octuf92b9qR5Rt60p7mW0I+PJqZ5ZAZ/i+1BO37K+K6KlYtbeb9nOWB8W5MDMfrNMhaCGqAiuip2S11aIHuQjSRpoC+UDymfJm8i6ZZ+ETP70ax5cvagh8EeK6KcVKmZbOmjbW531bN+1P0gCmISsroroqwdLHLP8A/Z77i16cifSKFhZzpGbJkGedy8GYj5Zy+cTSj7fsgRSRU0C1l+YtkbyAuEkqR1ULA9Zo0NnMJU5c7TBacgUZI9WknntQGz7K8iuIpYrqBaBihijiuIoIobrqIikigKCApQK4CiAoCxIpYpQKKKB0zgKNRSAUooAKKXLXLRgUADlpQlHSGgVgmgYU7FQcZxBLdxVZgJmeo0JB9PCR7imJjCUnSJSLRd3Wfxfai2uYAS2QFf8AcSdD0gQfaqG/2juMSR+4EGpEHm0czqYny3ilckaYaKcu+DessAnkBOk/hzqtXilognMBBgg75tZUdSIH1rJ3+0t9ly5/lI0AGhEGep3+vKqdL7Agzs2b361DkX49Fx7mekYzEi3bDyMsrJ5Qf+qeUgzB2rzzFcVuOuUnw66Dz/sNB5VP4Rxzuz45IJJPmTEt66HTzqNwS0bUeOzaRSRTGHxi3ApHP0jSZ19RHvUqKYwyg48MbIoacihIoIQJFJRRXFaAoJaMCuQUZWmKwa6KUCiApRwQKMLRKtGFoAECjAqJc4haVgpcSWyzOgMTqaBOL2ycpJDAnwkGSOTDqI1ossWKb6ROArmgbkD1NRE4tZJguFP+rwj1k6RpvVZ2txB7mEKlT8W5gcoI2JOxMc6LHhgk5JNVYWO7SWUXwliWWVIAkE6ag7EGdD0rDcQxz3WDNEgBdNoH+aisaGkbs6mLBHH0dXV1dUFx1dXV1AHV1dXUAWHD8YUYTJUEHLOkiSBJ2En7mvQ8Fd7xZkE88skA8xJ3rzKyDMjl5Ttrsd63fZjirXF7t9GAldAAVGhyxppTRMWsx3Hcl0XOWhNun6FhTHLTGctCVp1hTdBIS0YFAlOqKYRI4LRAUoFLFAxwFQeKYsouS3q50HRJ2J894HlRYnGAZoaApAZv9R+UecCfSOtUF/iyyckwJjbVo+M9D06VVKfhHR02kupy6+CFibMT4tVMannJB/CoheNvTX028v8AunlDtrBMc9h9TTL2hOrSecbfU0tHS48E7Bt3i93MEzlPQjYH16+RppcQh8FxcrCVnpyIPUfnpUbDXhbbMNTynl51Num21vvHTMxgaEry02/OlFUS3ZX4jh6nUR102I1Oh9vzzhYzBlZMQAco843PpVxhL1vUAOo3ylgw9jAIP1qLirmZtDGgGhP2j860EUUyWydhNcqEkAc9qtHRrQliJ0jqYkmTz51EW8WYAaSY05AnYeVSTtQ7iOD3kAYoSDzGtQhaYgtBgbmt015mAkwqgKPOBqfuaqryIgIVRr7nzqVGzTk0yjymZauo7vxGBGu1BUGNmt7EYNLnfB1VhCaGDrLGRzG29azDcOt2ySo+bMP9PhCkA9DE+9ZLsDeAvOp+ZJHqpH9CfpW6anj0crVykptXwxtlpt1p00DimZjGGNBRkUJFQAa04ooAKcWgAlpvFXAqEn0EdW0H3p0VHx58IjQzp1mIERrMkVEnSbLsEN2SK+zP8Qv2+77u2HbxM7Eggh2MmeZ5DnoPc1AtMu6qDyJgn1G/4V6n2W7J94k3fh1g6Z3bmS28SSPaqnjHCbdu4yCCAY5Gs3qUeijC2YJixjNnYDpMD25UMGYFsn+atd+qJ0/Cu/VR1o9Uf0jH4iyw3Ur5Rp9asMFigmHJyhjngA8uc/jWjucEW9bKp4XGo5ho/A1m7OEa3c7u8jBc6E6SNDr9QfwqVkUkVOFPgg4l8/yBT6tr7Emog0M1ouI4VVfMpBUwfaKqMcgBMaRAj1Ej8asi7QrVAHLdXIRlb5Dyn90+RqJw3Ck3JOgU6zpr0HWn7DgHUSKtsGikG4B4joTz9vXemStj4o3JE1LbNoBpy6n25VHxGHjQ03d48toSkM+ojWB5n+1Z7G8Vu3DLNHppRbTN2fNjSpcse4pZUa8/xqqpSaShnNlK3ZddlMWtvFIzEBTKknYSIB+sV6gy15P2fwwuYm0hiCwJnmB4iPcCPevWiKaBytcluT80RXWgapTrUdlpzCNNQRTrCmyKUBwCjUV0UoFMQgql4FkWXcTlmP8AdACgeZZl+hqJUm3k7sEnUXFgdQ+UE+wV/wCaqcv8WbNGv/ZHolsLatBREqupJgTHiJPLWawvEbClz4maTPgQx7aGfWtqGDTpMH2GulZTtO+QgFiSflU5FA/h1P1rCd+HdFT+qKNSp/jKj7f9VGxFtflyHyB1/CKaZkjRfF5kn+tNvfVfiyD6D8aC6iVhLptmQPaalY7u7wGZYI58x7/0NUw4lbBALJE9R9qu3AygqAwjlrQ00VyVOzG8TsZCTuJ32kVQuxYM55kk+8gVtuJqHRhlE7j2rC99lBHKSI8tPz7VpxO0VT7EwaBjB/M86scG0I6n5STOvv8A3qus+GGjTb6f9xVpwoeA+esekf3q+PY2nVyIv6qjks6g6zKnKGHXzP0qFxbCIpHdqQI2gn3k61c27ozMhWIEjoR/mkxN62BJ19alxRpnji14M7Z4ddfZTHUwB9TWixfAUXDjLBbdm5k+XQeVU54kz3F0JUHRBoDpzG1TcV2lYqUFsKPMmaQrx+ioyv8ARU8MuNbv22GhW4unow0r2JhXjWFl7ydWdR7kgV7Qwp4HB19XH9jDLTLrUlhTLinOeRnFNkU8wpsigB0VxFEBRhaBUN1X8dd0tG5b3Qhv4QZP9D7VYuKbcaEeUUklaovwzcZprwXPFu2htqUwtvM0f+Rx4QTyCkifXyrFYviOLvvnuXcxHy+ERPKF0q1413lxcPbtoT+yR7hA0Gih3Mecaecc6zD4ZLdxybjNE5GhUDmRG8ZB8RnWJAjQ1kjG0enTSp0WuIchVnSV3/PrVFetqSc1wk/WtLdsH9Utk6lw7qdJyFyE202Wf4qzDWirHMG8j06Gpx+SybtJnW0tD4ieknQTt+J+9W/Cb/dao+k6pJynr4TsaiMHuFJAhAoXwqJCRlzEfFEDfeBMxUkcMVRmmCeSyZ86mbjRXGLfg1GJRXGZY1E/avN+K2Mt1hyJn661uuGvpA+XT1rP4nhpu4wWxzB/9Qx+8Ae9JidNi5ItcCcL4BdvWu8U20TYG4zLm8xCmB0Yx9NaXB2TbTKwhlLKw5hlYgj6ilX9qjyXHdglFJOXKsaZflMf2oMQ5U6k66z5/N95q+DbZowQUPcMY941A5GKoMRZdxnJEQTHQVOxmMAO4+tR0xKlcp5girXyVZZKTA4biLaSWknyGp/0jp5mo2LvqxkLl9yacwFpWnPt95pvF27YMIxPrS+Ch3t8UWnZjh7PcF3PbRLT22Y3GKz4pAUAEknKeVerrjbIGlu9ebnlHd2/Z7mUsPMV5F2Ws58XZHRw38ni/wCNevNQot+Tm6vIoNcJv7IPEu9vFcgTDqu+Q53YSDqWWAdInxbmicVJcUw9WRil0c/Jkc3br9KiO4pqn3FNEVJUPrRxQgUQFBCEK0IWnYpKhjouRAwShQQ7IU00JCO4AJG4O8edUHCOxT3m7y/CWxJyL8bmeZ+Vfv6VYYC4cwUnSCQOh0P96kYjj5t3LdsaJmJbnOVWKCOmcLWCftk0em08nPEmvJH42iC86KAEtoiADQAIADH0NZy4LbsVIgjl1FdxHjrd47wILHUjNm1Jqqx3ERcKusZ55DLoBBBHLYVEU+zTtrslthUB8Mj3p9TAqLZv5vWpSrNMlfYTkoj2FYA+tBg0jEtcG+QgepIpsJlM0zexYtgtEyVEddZ/pUbCpz3MHG2jbe5cuaK+dgo5Bmkl9so1MDcwNqr+I2g6EEx0I3rS2cOmIw7KygSvhXkCpDAn94kgT9KzGLuVdgd2aoS9jTMhiLRViD/nzpoEipnET4qhVazmyVPgdD9aBiOVSeHYJr1xbSbsYE7DmSfIAE+1XT9icWGgKpH7wcZfvB+1AksiXEmiP2ORjjLWWdGJMCYWDmnygx716yaz3ZTs7+qhnYg3HGUx8KrM5QdzMAk+Q99C1PFUcnV5FOXt8ANTDU8aaemMoy9NU61NGggkKaNTTIpxTQQgmNcBSV1QxkSMGQLizsTB9G0n70GKwIW9ncgoqsfeYAoIqH2jxFwWgU1ObxeY/tJNZc8OUzs/jMtXD9oruNTduK2QKmVoOi7aCZ3kiJqrt2MozBQRzj+9SMfwsQHuX7neN8QCqFA5BSTyEDU+kUo4WFwYuKWJMnOCZGW+yEZh5AfWqm0kdjbwJZgmQI6irFGqJw3DZUzsx12zGfenWxC8quSSRknJydfAmMeBUBfEBI5z77D7TTuNuZoUbmpXC8C11gichqx2Vebn89KScuCzHHb7pdIs+B4W5cYKmkaluSjqep6DnHqQz+kbs6tm2uJsrCeFLijZW2VwOQY6HzjrWz4bh0toEQQBrruzc2bzP22qfjcIl6y9i58NxGQxqQGESPMHUelRj9rsolqG5Wuj5mv3MxpqrrjXZvFYVm720+RXK96Fbu2gwCHiNeVUtaCG7dm3/R1hvFduEDQKgJ6sZMewH1reqsV5x2H4z3VzuGPguHQ/uudB7GAPp516PTx6OVq099sIGgZ6VmppjTmMI029dNI1BA21NGnWpk0EDwo1NNqaMGghBGlWgmumoYw6DTWJsB1I58j59D5UoNGDStWqY8JuElKPaKy7wh8QgzMFK6a7aaSa1HZnhRfhN7CFho91c3KCVuBvbN9qyPaXFC0isz5QxyRr0J5ctD9ql9me0fd8PxCZlm495bclszH9XWQsDlBM+2lZlBxdeD0kcyy41JdlLiLwc+E+AaIP9I2J8zTDHLrTWDUqoBGsc664STA1J0AA112AFK3bNEIUvgcshncKglmMfny6mttw6wti3lXUnVn/AH2//I1gf3qp4XgBaTX42HiPQfuA/j1PpVtbOZIqUvJkz5L9sei6t3oiN6nBzOQfGRLEfIp/5Hl9eQmDw7ZW3YqMoOwMCSfIf1A5irHD2I0EkkyTzZjuTUMzJEk20ZGtuisjLlKEAqViMpB5RXz/ANvuB28JjGtWc3dlQyhtYmZUN8wBESdevWvoq1agedYb9LrWxgCrqWZriZCuuRgGYs2o8JRLg57+WjQdMdHg4Na+x21vKgzBWaY12ChVExG5JYzP2EHIVwNXEzhGX8keyWMWtxEf4c6KwU6HUf8AdSQwisB2Ku5rpzuDA8AZhOeI0U6tCBgDyk9a3K7amasTORqMShKkOUhNIK5jUozgNTRpxqbqSA1o5ppaIUChzSZqSuqGOgkNOK07fmKbU0D3CpYkDIFzSCc0ic3hjaI51A6VldxhldsrCQuojQgkbz7j6U32d4e1zFrkAZcrFkJhFQQMwA5h2Vi3SaHEG3GZWmddeXPfnyrsKzZLttCFa4gTNMQouI7yRyyK/rtzpJq0z2uHDGOl9q6XlU7+QOI4dhcfMI1Jjy5QekVbcG4SUHe3B42HhU/Ih5n/AFEfQepiyw3Du8uloHdWkHh89O7QHYrlBP8AD5zVi4ms0VRz8+duKivPZVulDhlOaAdNyegHP11gesVMu2STCgk/hU3BcKc+BR4jBc8l6An66efpTWZBLGIKaKBJ06+gH1PqSTzqwwb3EbM7H/ZuT6jZfx8qscNwhbY0Mtzbn6DoKeTCqvKoYEYYq42wj7msf+kHs5jcWi921tkQM5UkrcZwrx4tiIaANILGdDW7Z42Aph3Mb1CdAuD5iv2kWYfMd5grzAgg67dPPpUQivT+3fBrWFtofE9y45/a3GUldQ1xmLQGLHKMmwAbbMZ82xDyxO/mRBPmQCYPvV6dlgKNBBGhHMb+tekcH4mXW2rA5mQsx05BQTA6kj6GvM6veGcadbqM0AAFYHhEHYkz1imTKM+LfE9LDUhqDg+JJcgIwYkE6QdjBn88jUyasRxpRcXTEY0BNKxoDUiMMUQoAa6aCByaWmpo1agZBisfxzj5W+VtuCgUDwmdWIzGRpmCyBO01rMVZz22UGCysubeMwImOe9ZO3wVLV0sGLQTG0CSdgB0I+9JKzq/jNP62T/H9D9lldYysBEZSCNNNIMSPtV92W4a1/EouoVCHdhoQqEHQ8iWge88qpVXUbzqAPU7QN9hHOtpxDC38Jge7wlm4+JvsqOyK75FIJbVPhCg5QdNWJpW6VHq9Tm9LH9vgueCHCt+tYfCZYtXcxVYyLnUZlQjdc63VHSIGgFSLlpF1c/Ss32F7JY7D3hehUtMCjIzZXykAghFWAQ6qQJiGfXWtzd7Oi5IuOcp5J4eemvKqnDk8+1ZUcLuJedltEMFIzOJyzrpJAkgAfUcq0lm0qLlX1J5k8yaZs4W1YUW7ahVEmAOZ1JPNid5qOvGLBmbi6eY+0Ur4B0iXeuRUR7pNRr2KttqjAjyJH41I4hbKKkkSQ0zproYnbSairFYINRXfMwAOgP1P9hUx8Ke4L6yVnpAkSf5ZNQcMwAqGqIaMX+k3hCPbGJJJa2UthGDlGzkHQj4CSYzbSYJkCPIcXbymMpU85MmYEj0mfPXWvo3ieEtX7bW7qhkblsQeTAjUETvXgnF2ys+FAWLdy5LyC9xlzAEux0UBRCDqdyatg+KHiyjp65aICtBytOUnnEAx6GmiI0NOsj5AxByglQeQO5A+s+9OMarsxktlMzAOxkGY0dYCHlrAIFbC2zFRmEGNRM6+teZcLN1mW0gDSwOUgQYM6ncLpr6CvT2p4nL1sakn8iE03NETQE05hYQNLNIDSE0EIOlQ0ANFNBKG8biCq6bnT0o+A9mb2KMrCpOrn/iN2NBiAGXLO+nXWtF2X4zaw7Frl1gmXLBUtJmSwVQcpnkOVKz0X43Uxx4HGK9zZreDdlMNh9VUsx3ZjJ9B5VeogAgAAdBVTwPtBZxeY2Q+VWKlmXKCYU6TqRDD6Gk7Vtc/VLwtK7Oy5FCAl5chJEaiM0zyAmqx25Sl7nyzuL9psHhSFv4hVYlQEEtclvh/ZoC0GN4ilvcct6qgZm56ZVXqWY6ADrrXkOE7HX7N1cbibTLbRw7TlLAhSFYqDm+MqZInQV6fxvhKrhgqaHMpaCRnJ/e6+nlSysjJHa/kouMcazDu7RJWMrPzfqAT8vnz9N6zC2C58p1PIVoeCdmA5z3fhGyjSSPPpWw7lFUJlUKBAWBHoBSKNlO1vs84wxD3rdtD4c6KY+bxDMTWq7XXiothRJLNvoIgf1Iqt4bw4frxKrlVXZsoghQAQNttSNOU1pcbwtLtxXcsQg0UGFmZJPPp9KZLgmK4ZI/VVNsWzquUKeUgCOVMLweyPlP8zf3qv7W8SaxaQq+VnuBRqJPgdiBO5028qLsnfuPaLXLhds53jQQIEcutTxdE8XRZnC2UElEAHNgPxNZftNiOCPaNvFXMMVU5sqMucNDAEC2c0wWrzD9J3aM3cdcUm4bNhu5CKxVGdVYs7NrDrcI0yzC7g15yGIMidiPqIP4mmGJ2Kvqty8LJm2zMqlgCxt5tCCwkEiPOpfC+Atfgo4y/OSDCGfhH75jXSqfum08J120Ovp1rUdmsY2HtlnMW2MgTropBYCdJOUfmalFWVyUW49mq4dgEsIFQR1Y/Ex6sf6VKLVXYPjNi6BleCSQA3hJI3gemvvU8HmNasRx8infv7EJpKVhQVJSxSaWgmuDUEIKaPPTRalmlHDBmm7lsEk/mRzrjTbvpQW4pyi7iz07sDhcmEUxGYsf/YwfpFaioPB8N3di3bHyoqn1UQfwrI9su2L2mbD2FhxE3CQcs7hUjUxzO07UnbO7ijKdLyx/t/xAfsMGs5r923MRGQOoIOs6sV5cjT3bu/mGHwq5s9+7AKk+FVEM2nTMD7GsJ2Qtte4hZa4xZs7O7MSWJVGIJJ8wta3tdxRbHEcG7TlRLhaNSFuyhMeWWfOKmjZPEoyUO2k3+y67ScYXB2VS3AuPCWlOwiAWYk/CJGpO5FM8P4MlrNfxeJN52UFjcYLZRQSfAmwGvxHfy2ru0nZm3j1W4l3K2UBXA7xChOYwoYAzO88hUDh3ZrDYEC5iL3eMssgIyiUEyqZiSwA6wKWkZZ7Vju+fNlzgrltcY9pbZUmyrqQAEZQYYiNjmYCDE5fKhx/EL/6ylu3lVA6ByQWZgYzAcl0J+lV3ZviDX79/FXPCgQIpOiqoYsQWOhI3PrVNwO61/iBaQVLu/MgKrZlyz5hRMbGhx+DJ6y4ryzv0wWGuDDKrZSjPcnoVyBTH8RrTdlbjLge9K+Nla4V0mQsAe4UfWsd25xTXMWyn4bYCgCOYDEkx1O1RP/ksY1n9StZQHYKzPoUtkIoG2gMiSds3Op2iLOt7TZ5ocFfv3HuNCtcD3CWBGpdiyqsEhiwOg5Hzqov2CrEQRHUEGNgSOU6fWvoteyfD0Vr+JK3Cvhe5ORVLAAqq2oyglgYknxV2I7AcMvWi9q1lLISLge4SQwkFi7GeR11EcqgvUn5/o8b4Dhr7IjsM1tSXVI8TMBlUawIESNfOmMXwS9dY6nMZaGOwJnKPQMK0dm4xS0cOUKSAwOaMg0MHcEQd/wDNg3oNKZIwT1MoytJf98nnNrBMtwW7iOJOgABJ8xMAjzrf4C2620W5BYCDG2hIH2in83+a4mmSopz6h5ElQQpDXBqGmMg1mrpoAaKaAQU0oahBrgKUexS1SeD4bvMRat8i6k/7VOZv/VTUVhVn2TxIt4yyzbFiuvLOpUH70MtxU5K/k9fXwrqdhqfQamvDuJ3+8vXLhkh3dhO+Uscv2ivSe1faVLdtrdpwbrADwmcoaZYEaSI+4ry8rGlKkd3DlXqJIeweLexcW7bbKymQdxDCCCOkE12IxL37j3LrZnaNeg5BRyA6VEvTOtFatk7SKY6+SC9Fzk0m12TcDxG/Y0tX3QH5QZWTucrSs+cVa9n8DcxuJPeOzADNccmTlB0UdCTt0APSqTuhE869J/R1h1XDM41L3DJ8lAAH4n3qHwcbJljl9t388GP4xxY3jkXw2FMW7a6KAugY9WO+u01c/o6tg3rrn5bYHpnaf+FN8cw+Cwjsbc3LxJKoxDW7Un4iABMcgSeXSj7FcJNy3eZnK23Q2jlMNOhY66DwkiT+8fc8HMjFrKrdlBcui/ipOouX+f7rvA+xFajj+EIbH3HGVe7sImmhByEge4A/xVTx3E4S3FrCWxnR1bv5JOZTsrGSwn200B5ROL8exGJULcYBRrlQZVJGxO5P1igjfGO5N2/o1fBFw9vh9pMUBluuSFys2Zy5dBlUEnRV+kVa9pUNrBXBYi2FTZViFJ8QUDYwTVLhu1WGtpYt5cxS2gzkCEOQBgOebkdqrO1Pan9YXubIItyCzHQvGwA5LMHXU+XOKdmh5oRhV81X2ZSxaVVCqoCiYAEDXy96dJpAK40xy3K+xZoZpaSmFbCFLNDNJQLYxRCgFGDQAVEpoa4UE2HSKIrhS1FE7gn11OpNC6TSzSlqKHhmlGSkvAw9kkaaEee/9jTtpSBqNaLNRoAQxLAQJAPzGQIHsSfbzoo15fyOTJDY0q/2BNTMLxbEW0a1buMisSSABMkQYaJWYGxoVw6QJuKNFJ0kgkMSIB1IhR/F5UBtL4P2g8U5oE5IA89dz0289IMu5p3Hj9kYjWTJJ3mkInTl9qldwmXN3gmCcsa/CpHONyV/hPpRPhkE/tVMKxEDQlcsLvuZP0oI5IirTgp3ulgnOJCgxESSCSo11jT6+WqYi2FYqrhwI8QEA6A6T9PagVjJWuilJoZphbFNCaUmhJoIsUmkJpDQzQAU12agJoZoIEFKKUCiUUE0dXUsUoFAUJNEDXRXR+fpQFHTXZq6KWgKEmpBxAj/AMaj6+f9x9Kj0tAyVD5vjX9mu0c9PETPry9BSLeAj9mpiJnNrEzMHnIn00jWmorooAct3QN0B05+ebUxz1H8oo1vDNPdodtPFA1B5EdCPRj5RHpxKigtjwvCP/Gu0c/3Qs77yM3qaRrwIjIuw8WsiMuo/lP8xpsihqQENDNEaBqBaOmhJo6SKAoEmhJoyKEigKANJNGRSRQFH//Z')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "50px",
                fontFamily: "sans-serif",
            }}>
            </header>
            <div className="Intro">
                <p className="data">Track films you have watched.</p>
                <p className="data">Save those you want to see.</p>
                <p className="data">Tell your friends what’s good.</p>
                <br />
                <button><a href="../signup">Get's Started it's for free</a></button>
                <br />
                <p className="multiple-platforms-data">The social network for film lovers. Also available on 
                    iOS, Apple TV and Android</p>
            </div>
            <div>
        <div className='ImagesList'>
         {recentMovies.map( (data)=>{
            return (
      <div key={data.name} >     
      <Card  key={data.name} sx={{ maxWidth: 200 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={data.url}
        title="green iguana"
      />
      </Card>
      </div>
      )

         }) }
    </div>
            </div>
            
        
            </div>
      
    )
}

export default Home;