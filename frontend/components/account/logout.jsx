import { Button } from '@mui/material'
import Link from 'next/link'

export default function Logout() {
    // useRouter , NextLink
    return (
        <>
            <div>로그아웃 기능 컴포넌트</div>
            <div>현재 구현 기능 : 버튼을 누르면 메인페이지로 이동</div>
            <Link href='/'>
                <Button
                    color='primary'
                    type='submit'
                    variant='outlined'
                    fullWidth
                    style={{ verticalAlign: 'middle', color: '#000000' }}
                    sx={{ mt: 4.5, mb: 2, borderRadius: 12.5, boxShadow: 4 }}
                >
                    로그아웃
                </Button>
            </Link>
        </>
    )
}
